const { StatusCodes } = require("http-status-codes");
const { CampingService } = require("../services");

async function createCamping(req, res, next) {
  try {
    const {
      title,
      description,
      location,
      pricePerNight,
      services,
      // ['Bonfire', 'Meals', 'Tents']
    } = req.body;
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const imagePath =
      req.files && req.files.length > 0
        ? req.files.map((file) => `${baseUrl}/uploads/camping/${file.filename}`)
        : [];
    // Generate full image URLs if images are uploaded
    //   const baseUrl = `${req.protocol}://${req.get("host")}`;
    //   const images =
    //     req.files && req.files.length > 0
    //       ? req.files.map((file) => `${baseUrl}/uploads/camping/${file.filename}`)
    //       : [];

    const camping = await CampingService.createCamping({
      title,
      description,
      location,
      pricePerNight,
      services,
      images: imagePath,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Camping Created Successfully",
      data: camping,
    });
  } catch (error) {
    next(error);
  }
}
async function deleteCamping(req, res, next) {
  try {
    const { id } = req.params;
    const response = await CampingService.deleteCamping(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Camping Deleted Successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function getCamping(req, res, next) {
  try {
    const response = await CampingService.getCamping(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Camping fetched successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function updateCamping(req, res, next) {
  try {
    const { id } = req.params;
    const response = await CampingService.updateCamping(id, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Camping updated successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
async function getCampings(req, res, next) {
  try {
    const response = await CampingService.getAllCampings(req.query);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Campings fetched successfully",
      data: response,
    });
  } catch (error) {
    next(error);
  }
}
module.exports = {
  createCamping,
  deleteCamping,
  getCamping,
  updateCamping,
  getCampings,
};
