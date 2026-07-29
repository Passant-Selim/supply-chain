const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database is connected");
    } catch (error) {
        console.error("mongoDB connection failed");
        console.error(error);
        process.exit(1);
    }
}

module.exports = dbConnection;