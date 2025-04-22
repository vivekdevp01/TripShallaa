const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes");
const { ServerConfig } = require("./config");
const connectToDB = require("./config/dbConfig");
const errorHandler = require("./utils/errorHandler");
const app = express();
const server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.text());
// app.use(cookieParser());
// app.use(express.static("public"));

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
