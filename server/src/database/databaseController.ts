import mongoose from 'mongoose';

export const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://jackson:${process.env.MONGODB_USER_PASSWORD}@cluster0.fai93ec.mongodb.net/?retryWrites=true&w=majority`,
    );
  } catch (error) {
    console.log(error);
  }
};

console.log(connect());
