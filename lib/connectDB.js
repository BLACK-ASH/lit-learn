import mongoose from "mongoose";

let isConnected = false; // Track connection status

export default async function connectDB() {
    if (isConnected) {
        console.log("Database is already connected.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        isConnected = true;
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw new Error("Database connection failed");
    }
}
