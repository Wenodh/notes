const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = async () => {
    try {
        const url = process.env.MONGO_URI;
        const conn = await mongoose.connect(url);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit();
    }
};
module.exports = connectDb;
