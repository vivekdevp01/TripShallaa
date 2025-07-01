const { RaftingService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createRafting(req, res, next) {
  try {
    const {
      title,
      location,
      pricePerPerson,
      durationInKm,
      durationInHours,
      description,
      highlights,
      includes,
      whatToExpect,
      meetingPoint,
      pickupDetails,
      cancellationPolicy,

      availableDates,
      rating,
      reviewCount,
      tags,
      groupDiscountAvailable,
      minimumAge,
      isPopular,
      isActive,
    } = req.body;
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const imagePath =
      req.files && req.files.length > 0
        ? req.files.map((file) => `${baseUrl}/uploads/rafting/${file.filename}`)
        : [];
    const rafting = await RaftingService.createRafting({
      title,
      location,
      pricePerPerson,
      durationInKm,
      durationInHours,
      description,
      highlights,
      includes,
      whatToExpect,
      meetingPoint,
      pickupDetails,
      cancellationPolicy,
      image: imagePath,
      availableDates,
      rating,
      reviewCount,
      tags,
      groupDiscountAvailable,
      minimumAge,
      isPopular,
      isActive,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Rafting Created Successfully",
      data: rafting,
    });
  } catch (error) {
    next(error);
  }
}
async function deleteRafting(req, res, next) {
  try {
    const response = await RaftingService.deleteRafting(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Rafting Deleted Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function updateRafting(req, res, next) {
  try {
    const response = await RaftingService.updateRafting(
      req.params.id,
      req.body
    );
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Rafting Updated Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function toggleRaftingVisibility(req, res, next) {
  try {
    const response = await RaftingService.toggleRaftingVisibility(
      req.params.id
    );
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Rafting Visibility Toggled Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function getRafting(req, res, next) {
  try {
    const response = await RaftingService.getRafting(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Rafting Fetched Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function getAllRaftings(req, res, next) {
  try {
    const response = await RaftingService.getAllRaftings(req.query);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Raftings Fetched Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
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
