const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const winston = require('winston');
const connectDB = require('./src/db/connection/dbConnection');

const app = express();

// Logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

// Environment variables
const PORT = process.env.PORT || 3000;
const DBURL = process.env.DBURL;

if (!DBURL) {
  logger.error('DBURL not provided in environment variables');
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Log all incoming requests for debugging
app.use((req, res, next) => {
  logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);
  next();
});

// API routes
const routes = require('./src/routes/index');
app.use('/api', routes);



// Serve frontend
const frontendPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

// Catch-all to support React Router
app.get('/*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});


// Global error handler
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'development' ? err.stack : 'Internal server error',
  });
});

// Connect DB and start server
const startServer = async () => {
  try {
    await connectDB(DBURL);
    logger.info('MongoDB connected successfully');
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  } catch (err) {
    logger.error(`Failed to connect to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

startServer();