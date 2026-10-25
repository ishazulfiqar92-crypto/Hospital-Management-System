import mongoose from "mongoose";

// .env ki MONGODB_URI se MongoDB connect karta hai
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
  }
};

export default connectDB;
