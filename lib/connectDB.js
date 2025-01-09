import mongoose from "mongoose";

const connectDB = async () => {
  // Check if the connection has already been established
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    // Connect to MongoDB using the connection string in the environment variable
    await mongoose.connect(process.env.MONGO_DB_URI,);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
