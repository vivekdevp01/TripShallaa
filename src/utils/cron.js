const cron = require("node-cron");

const { QueryService } = require("../services");

function startBookingRemainderCron() {
  cron.schedule("*/1 * * * *", async () => {
    console.log("running daily booking remainder cron ..");
    await QueryService.sendCheckInRemainder();
  });
}

module.exports = startBookingRemainderCron;
