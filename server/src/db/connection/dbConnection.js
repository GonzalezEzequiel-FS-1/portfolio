const mongoose = require('mongoose');

const connectDB = async (DBURL) => {
    if (!DBURL) {
        console.error('No DB URL provided');
        return { success: false, error: "DB URL not provided." };
    }

    try {
        const connection = await mongoose.connect(DBURL);
        return { success: true, message: "Database connected" };
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        return { success: false, error: err.message };
    }
};

module.exports = connectDB;
