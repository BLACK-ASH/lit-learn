import mongoose from "mongoose";

let isConnectioned = false;
const connectDB = async () => {
    if (isConnectioned) {
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_DB_URI).then(() => {
            isConnectioned = true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;