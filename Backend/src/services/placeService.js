const { StatusCodes } = require("http-status-codes");
const BadRequestError = require("../errors/badRequest");
const { PlaceRepository } = require("../repositories");
const NotFoundError = require("../errors/notFound");

const placeRepository = new PlaceRepository();

async function createPlace(place) {
  try {
    const existingPlace = await placeRepository.findByName(place.name);
    if (existingPlace) {
      throw new BadRequestError("Place with this name already exists", {
        name: place.name,
      });
    }
    const newPlace = await placeRepository.create(place);
    return newPlace;
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
    throw error;
  }
}
async function deletePlace(id) {
  try {
    const deletedPlace = await placeRepository.destroy(id);
    return deletedPlace;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Place", id);
    }
    throw error;
  }
}
async function getPlaceId(id) {
  try {
    const place = await placeRepository.get(id);
    return place;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Place", id);
    }
    throw error;
  }
}
async function updatePlace(id, data) {
  try {
    const updatedPlace = await placeRepository.update(id, data);
    return updatedPlace;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Place", id);
    }
    throw error;
  }
}
async function togglePlaceVisibility(id) {
  try {
    const place = await placeRepository.get(id);
    if (!place) {
      throw new NotFoundError("Place", id);
    }
    const updatedPlace = await placeRepository.update(id, {
      isActive: !place.isActive,
    });
    return updatedPlace;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Place", id);
    }
    throw error;
  }
}
async function getAllPlaces(query) {
  try {
    let customFilter = {};
    let sortFilter = {};
    const page = query.page ? parseInt(query.page, 10) : 1;
    const limit = query.limit ? parseInt(query.limit, 10) : 10;
    const skip = (page - 1) * limit;
    if (query.name) {
      customFilter.name = { $regex: query.name, $options: "i" };
      //   customFilter.title = { $regex: query.title, $options: "i" };
    }
    if (query.location) {
      customFilter.location = { $regex: query.location, $options: "i" };
    }
    // if (query.price) {
    //   const [min, max] = query.price.split("-").map(Number);
    //   customFilter.pricePerPerson = {
    //     $gte: min || 0,
    //     $lte: max || 1000000,
    //   };
    // }
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
    // if (query.minAge) {
    //   customFilter.minimumAge = { $gte: Number(query.minAge) };
    // }
    if (query.isActive !== undefined) {
      customFilter.isActive = query.isActive === "true";
    }

    // if (query.isPopular !== undefined) {
    //   customFilter.isPopular = query.isPopular === "true";
    // }
    if (query.sort) {
      query.sort.split(",").forEach((param) => {
        const [field, dir] = param.split("_");
        sortFilter[field] = dir === "desc" ? -1 : 1;
      });
    }
    const places = await placeRepository.getAllPlaces(
      customFilter,
      sortFilter,
      limit,
      skip
    );
    return places;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new NotFoundError("Cannot fetch all products", data);
    }
    throw error;
  }
}
module.exports = {
  createPlace,
  deletePlace,
  getPlaceId,
  updatePlace,
  togglePlaceVisibility,
  getAllPlaces,
};
