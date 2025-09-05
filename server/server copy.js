const path = require('path')
const dotEnv = require('dotenv');
dotEnv.config();

const express = require('express');
const cors = require('cors');
const winston = require('winston');
const connectDB = require('./src/db/connection/dbConnection');

const app = express();

// Logger setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
});

// Environment variables
const PORT = process.env.PORT || 3000;
const DBURL = process.env.DBURL || "mongodb+srv://djzekz_db_user:sGKvASiVoAaicvZu@contactdata.uscilbs.mongodb.net/?retryWrites=true&w=majority";

if (!DBURL) {
    logger.error('DBURL not provided in environment variables');
    process.exit(1);  // Exit with error
}

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const routes = require('./src/routes/index');
app.use('/api', routes);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: process.env.NODE_ENV === 'development' ? err.stack : 'Internal server error'
    });
});

// Async function to connect DB and start server
const startServer = async () => {
    try {
        await connectDB(DBURL);  // Wait for DB connection
        logger.info('MongoDB connected successfully');

        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    } catch (err) {
        logger.error(`Failed to connect to MongoDB: ${err.message}`);
        process.exit(1);  // Exit if DB connection fails
    }
};

// Start everything
startServer();
