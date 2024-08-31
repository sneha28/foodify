import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://snehad925:9833941098@cluster0.gsvle5j.mongodb.net/foodify"
    )
    .then(() => console.log("DB connected"));
};
