import mongoose from "mongoose";

let isConnected = false;
export const connectToDb = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDb is already connected')
    return;
  } 

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}


// import mongoose from 'mongoose';

// let isConnected = false;

// export const connectToDB = async () => {
//   mongoose.set('strictQuery', true);

//   if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
//   if(isConnected) return console.log('Already connected to MongoDB');

//   try {
//     await mongoose.connect(process.env.MONGODB_URL);

//     isConnected = true;
//     console.log('we are connected')
//   } catch {
//     console.log('There is a connection db error.')
//   }
// }