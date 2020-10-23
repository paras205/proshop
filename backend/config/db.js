import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log(`Mongo DB connected: ${connection.connection.host}`);
  } catch (err) {
    console.log(`Error:${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
