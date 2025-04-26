const CrudRepository = require("./crudRepository");

const UserQeury = require("../models/userQuery");

class QueryRepository extends CrudRepository {
  constructor() {
    super(UserQeury);
  }
  async findUserByNumber(phone) {
    try {
      const user = await UserQeury.findOne({ phone });
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
module.exports = QueryRepository;
