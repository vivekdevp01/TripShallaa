const { StatusCodes } = require("http-status-codes");
const { PlaceService } = require("../services");

async function createPlace(req, res, next) {
  try {
    const {
      name,
      description,
      location,
      latitude,
      longitude,
      category,
      isActive,
    } = req.body;
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const imagePath =
      req.files && req.files.length > 0
        ? req.files.map((file) => `${baseUrl}/uploads/places/${file.filename}`)
        : [];
    const place = await PlaceService.createPlace({
      name,
      description,
      location,
      image: imagePath,
      latitude,
      longitude,
      category,
      isActive,
    });
    return res.status(201).json({
      success: true,
      message: "Place Created Successfully",
      data: place,
    });
  } catch (error) {
    next(error);
  }
}
async function deletePlace(req, res, next) {
  try {
    const id = req.params.id;
    const deletedPlace = await PlaceService.deletePlace(id);
    return res.status(200).json({
      success: true,
      message: "Place Deleted Successfully",
      data: deletedPlace,
    });
  } catch (error) {
    next(error);
  }
}
async function getPlaceId(req, res, next) {
  try {
    const placeId = req.params.id;
    const place = await PlaceService.getPlaceId(placeId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Place Found",
      data: place,
    });
  } catch (error) {
    next(error);
  }
}
async function updatePlace(req, res, next) {
  try {
    const response = await PlaceService.updatePlace(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Place Updated Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function togglePlaceVisibility(req, res, next) {
  try {
    const response = await PlaceService.togglePlaceVisibility(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Place Visibility Toggled Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function getAllPlaces(req, res, next) {
  try {
    const response = await PlaceService.getAllPlaces(req.query);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Places Fetched Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
module.exports = {
  createPlace,
  deletePlace,
  getPlaceId,
  updatePlace,
  togglePlaceVisibility,
  getAllPlaces,
  // Add other functions as needed
};
