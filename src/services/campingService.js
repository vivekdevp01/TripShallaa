const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/badRequest");
const { CampingRepository } = require("../repositories");
const generateCampCode = require("../utils/generateCode");
const NotFoundError = require("../errors/notFound");
const { CampingService } = require(".");

const campingRepository = new CampingRepository();

async function createCamping(data) {
  try {
    const existing = await campingRepository.findByTitle(data.title);
    if (existing) {
      throw new BadRequestError("Camping with this title already exists", {
        title: data.title,
      });
    }
    const code = await generateCampCode();
    const newCamp = await campingRepository.create({ ...data, code });
    return newCamp;
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.keys(error.errors).map((field) => ({
        field,
        message: error.errors[field].message,
      }));
      throw new BadRequestError(
        "Validation failed for the provided data. Please correct the errors and try again.",
        errors
      );
    }

    console.error("Error creating camping site:", error);
    throw error;
  }
}
async function deleteCamping(id) {
  try {
    const response = await campingRepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Camping", id);
    }
    throw error;
  }
}
async function getCamping(id) {
  try {
    const response = await campingRepository.get(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Camping", id);
    }
    throw error;
  }
}
async function updateCamping(id, data) {
  try {
    // Find the camping site by ID and check if it exists
    const existingCamping = await campingRepository.get(id);
    if (!existingCamping) {
      throw new NotFoundError("Camping site not found", id);
    }

    // Check if the code is being updated and if it is unique
    if (data.code) {
      const existingCode = await campingRepository.findByCode({
        code: data.code,
      });
      if (existingCode && existingCode._id.toString() !== id) {
        throw new BadRequestError("Camping with this code already exists", {
          code: data.code,
        });
      }
    }

    // Proceed with updating the camping site
    const updatedCamping = await campingRepository.update(id, data);
    return updatedCamping;
  } catch (error) {
    console.error(error);

    // Handle specific MongoDB error for duplicate code
    if (error.code === 11000) {
      throw new BadRequestError("Camping with this code already exists", {
        code: data.code,
      });
    }

    // Handle NotFoundError if the camping site doesn't exist
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Camping site not found", id);
    }

    // General error handling
    throw error;
  }
}

async function getAllCampings(query) {
  try {
    const sortFilter = {};
    let customFilter = {};
    const page = query.page ? parseInt(query.page, 10) : 1;
    const limit = query.limit ? parseInt(query.limit, 10) : 10;
    const skip = (page - 1) * limit;
    if (query.title) {
      customFilter.title = {
        $regex: query.title,
        $options: "i",
      };
    }
    if (query.location) {
      customFilter.location = { $regex: query.location, $options: "i" };
    }
    if (query.price) {
      const [min, max] = query.price.split("-").map(Number);
      customFilter.pricePerNight = {
        $gte: min || 0,
        $lte: max || 1000000,
      };
    }
    if (query.services) {
      customFilter.services = {
        $regex: query.services,
        $options: "i",
      };
    }
    if (query.sort) {
      query.sort.split(",").forEach((param) => {
        const [field, dir] = param.split("_");
        sortFilter[field] = dir === "desc" ? -1 : 1;
      });
    }
    if (query.code) {
      customFilter.code = {
        $regex: query.code,
        $options: "i",
      };
    }
    const campings = await campingRepository.getAllCamps(
      customFilter,
      sortFilter,
      limit,
      skip
    );
    return campings;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Cannot fetch all products", query);
    }
    throw error;
  }
}

module.exports = {
  createCamping,
  deleteCamping,
  getCamping,
  updateCamping,
  getAllCampings,
};
