const Rafting = require("../models/rafting");
const CrudRepository = require("./crudRepository");

class RaftingRepository extends CrudRepository {
  constructor() {
    super(Rafting);
  }
  async findByTitle(title) {
    try {
      const raft = await Rafting.findOne({ title: title });
      return raft;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllRafts(filter = {}, sort = {}, limit = 10, skip = 0) {
    const response = await Rafting.find(filter)
      .sort(sort)
      .limit(limit)
      .skip(skip);
    return response;
  }
}

module.exports = RaftingRepository;
