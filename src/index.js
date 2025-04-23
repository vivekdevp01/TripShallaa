const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes");
const { ServerConfig } = require("./config");
const connectToDB = require("./config/dbConfig");
const errorHandler = require("./utils/errorHandler");
const Admin = require("./models/admin");
const app = express();
const path = require("path");
const server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.text());
// app.use(cookieParser());
// app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", apiRoutes);

app.use(errorHandler);

async function startServer() {
  try {
    await connectToDB();
    console.log("✅ Connected to MongoDB");

    server.listen(ServerConfig.PORT, () => {
      console.log(`🚀 Server listening on port ${ServerConfig.PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start the server:", error);
    process.exit(1);
  }
}

startServer();
// async function testFind() {
//   const admin = await Admin.findOne({ username: "Vivek01" });
//   console.log(admin ? "✅ Found:" : "❌ Not found:", admin);
//   mongoose.disconnect();
// }

// testFind();
