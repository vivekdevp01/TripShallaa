const CrudRepository = require("./crudRepository");

const Place = require("../models/places");

class PlaceRepository extends CrudRepository {
  constructor() {
    super(Place);
  }
  async findByName(name) {
    try {
      const place = await Place.findOne({ name: name });
      return place;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllPlaces(filter = {}, sort = {}, limit = 10, skip = 0) {
    const response = await Place.find(filter)
      .sort(sort)
      .limit(limit)
      .skip(skip);
    return response;
  }
}

module.exports = PlaceRepository;
