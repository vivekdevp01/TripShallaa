const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/badRequest");
const { RaftingRepository } = require("../repositories");
const NotFoundError = require("../errors/notFound");

const raftingRepository = new RaftingRepository();

async function createRafting(data) {
  try {
    const existing = await raftingRepository.findByTitle(data.title);

    if (existing) {
      throw new BadRequestError("Rafting with this title already exists", {
        title: data.title,
      });
    }

    const newRafting = await raftingRepository.create(data);
    return newRafting;
  } catch (error) {
    if (error.name === "ValidationError") {
      // error.errors is an object where each key is the name of an invalid field.
      const errors = Object.keys(error.errors).map((field) => ({
        field, // Field name (e.g., "password")
        message: error.errors[field].message, // Error message (e.g., "Path password (1234) is shorter than the minimum allowed length (8).")
      }));
      throw new BadRequestError(
        "Validation failed for the provided data. Please correct the errors and try again.",
        errors
      );
    }

    // If the error is not validation-related, log it properly and rethrow
    console.error("Error creating rafting route:", error);
    throw error;
  }
}
// deleting raft
async function deleteRafting(id) {
  try {
    const response = await raftingRepository.destroy(id);
    return response;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Rafting", id);
    }
    throw error;
  }
}

async function updateRafting(id, data) {
  try {
    const updatedRafting = await raftingRepository.update(id, data);
    return updatedRafting;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Rafting", id);
    }
    throw error;
  }
}
async function toggleRaftingVisibility(id) {
  try {
    const rafting = await raftingRepository.get(id);
    if (!rafting) {
      throw new NotFoundError("Rafting", id);
    }
    const updatedRafting = await raftingRepository.update(id, {
      isActive: !rafting.isActive,
    });
    return updatedRafting;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Rafting", id);
    }
    throw error;
  }
}
async function getRafting(id) {
  try {
    const rafting = await raftingRepository.get(id);
    if (!rafting) {
      throw new NotFoundError("Rafting", id);
    }
    return rafting;
  } catch (error) {
    console.error("Error fetching rafting:", error);
    throw error; // don't re-wrap NotFoundError unnecessarily
  }
}
async function getAllRaftings(query) {
  try {
    let customFilter = {};
    let sortFilter = {};
    const page = query.page ? parseInt(query.page, 10) : 1;
    const limit = query.limit ? parseInt(query.limit, 10) : 10;
    const skip = (page - 1) * limit;
    if (query.title) {
      customFilter.title = { $regex: query.title, $options: "i" };
    }
    if (query.location) {
      customFilter.location = { $regex: query.location, $options: "i" };
    }
    if (query.price) {
      const [min, max] = query.price.split("-").map(Number);
      customFilter.pricePerPerson = {
        $gte: min || 0,
        $lte: max || 1000000,
      };
    }
    if (query.durationKm) {
      const [min, max] = query.durationKm.split("-").map(Number);
      customFilter.durationInKm = {
        $gte: min || 0,
        $lte: max || 1000,
      };
    }
    if (query.durationHours) {
      const [min, max] = query.durationHours.split("-").map(Number);
      customFilter.durationInHours = {
        $gte: min || 0,
        $lte: max || 100,
      };
    }
    if (query.minAge) {
      customFilter.minimumAge = { $gte: Number(query.minAge) };
    }
    if (query.isActive !== undefined) {
      customFilter.isActive = query.isActive === "true";
    }

    if (query.isPopular !== undefined) {
      customFilter.isPopular = query.isPopular === "true";
    }
    if (query.sort) {
      query.sort.split(",").forEach((param) => {
        const [field, dir] = param.split("_");
        sortFilter[field] = dir === "desc" ? -1 : 1;
      });
    }
    const raftings = await raftingRepository.getAllRafts(
      customFilter,
      sortFilter,
      limit,
      skip
    );
    return raftings;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFound("Cannot fetch all products", data);
    }
    throw error;
  }
}

module.exports = {
  createRafting,
  deleteRafting,
  updateRafting,
  toggleRaftingVisibility,
  getRafting,
  getAllRaftings,
};
