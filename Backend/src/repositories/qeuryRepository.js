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
  async findByCheckInRange(startDate, endData) {
    try {
      const result = await UserQeury.find({
        checkInDate: {
          $gte: new Date(startDate),
          $lte: new Date(endData),
        },
        paymentConfirmed: true,
      });
      return result;
    } catch (error) {
      console.error("Error finding users by check-in date range:", error);
      throw error;
    }
  }
}
module.exports = QueryRepository;
