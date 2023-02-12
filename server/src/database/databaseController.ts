import mongoose from 'mongoose';

export const connect = async () => {
  await mongoose.connect(
    `mongodb+srv://jackson:${process.env.MONGODB_USER_PASSWORD}@cluster0.fai93ec.mongodb.net/?retryWrites=true&w=majority`,
  );
};

console.log(connect());
