import mongoose from "mongoose";

let isConnected = false; // Track connection status

export async function connectDB() {
    if (isConnected) return;

    try {
        const db = await mongoose.connect(process.env.MONGO_URI, );
        isConnected = true;
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error);
        throw new Error("Database connection failed");
    }
}
