const Admin = require("../models/admin");
const CrudRepository = require("./crudRepository");

class AdminRepository extends CrudRepository {
  constructor() {
    super(Admin);
  }
  async findByUsername(username) {
    try {
      const admin = await Admin.findOne({ username: username });
      return admin;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = AdminRepository;
