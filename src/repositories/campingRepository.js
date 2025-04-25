const CrudRepository = require("./crudRepository");
const Camping = require("../models/camping");

class CampingRepository extends CrudRepository {
  constructor() {
    super(Camping);
  }
  async findByTitle(title) {
    try {
      const camp = await Camping.findOne({ title: title });
      return camp;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async findByCode(code) {
    try {
      const camp = await Camping.findOne(code);
      return camp;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = CampingRepository;
