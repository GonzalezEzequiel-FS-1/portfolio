//Importing  Dependencies
const path = require("path");
const dotenv = require("dotenv");
// Environmental Variables configuration
dotenv.config();
// Importing express, CORS, Winston and the Database Configuration
const express = require("express");
const cors = require("cors");
const winston = require("winston");
const connectDB = require("./src/db/connection/dbConnection");
// Creating the Express instance
const app = express();
// Logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});
// Environment variables
const PORT = process.env.PORT || 4000;
const DBURL =
  process.env.DBURL ||
  "mongodb+srv://djzekz_db_user:sGKvASiVoAaicvZu@contactdata.uscilbs.mongodb.net/?retryWrites=true&w=majority";
// Check if Environmental Variables are available
if (!DBURL || !PORT) {
  logger.error("Missing required environment variables");
  process.exit(1);
}
// Middleware
app.use(
  // Cors Config
  cors({
    origin: [
      "http://www.egwebdev.com",
      "https://www.egwebdev.com",
      "http://172.233.188.182",
      "https://172.233.188.182",
      "http://107.115.108.50",
    ],
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
// Log all incoming requests
app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);
  next();
});

// API routes
const apiRoutes = require("./src/routes/index");
app.use("/api", apiRoutes);

// Showcase routes (dynamic)
const showcaseRoutes = require("./src/routes/showcaseRoutes");
app.use("/showcase", showcaseRoutes);

// Paths
const frontendPath = path.join(__dirname, "../frontend/dist");

// Serve main portfolio static files
app.use(express.static(frontendPath));

// Catch-all for main portfolio React Router (must be last)
app.get("/*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Global error handler
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "development"
        ? err.stack
        : "Internal server error",
  });
});
// Start server
const startServer = async () => {
  try {
    await connectDB(DBURL);
    logger.info("MongoDB connected successfully");
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  } catch (err) {
    logger.error(`Failed to connect to MongoDB: ${err.message}`);
    process.exit(1);
  }
};
startServer();
