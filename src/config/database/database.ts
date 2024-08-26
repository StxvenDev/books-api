import mongoose from "mongoose";

export const initDatabase = async () => {
  try {
    const uri : any = process.env.MONGO_URI;
    await mongoose.connect(uri);
    console.log('Connection to database was sucessfull !!');
  } catch (error) {
    console.log(error);
    throw new Error('Connection to database failed');
  }
}