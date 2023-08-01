import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose';

const MONGODB_URI =process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.log('Please define the MONGODB_URI environment variable inside .env.local');
}

// Function to connect to the MongoDB database
async function connectDB() {
  try {
    await mongoose.connect(String(MONGODB_URI), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Database ');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
export default connectDB;
