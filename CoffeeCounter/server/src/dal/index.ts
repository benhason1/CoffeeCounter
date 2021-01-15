import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
import Configuration from "../Configuration";

const userSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    coffeeGrams: Number,
  },
  { versionKey: false }
);

const userModel = mongoose.model("User", userSchema);

mongoose
  .connect(Configuration.mongo.connectionUri)
  .then((res) => console.log("connected"));

export async function getAllUsers() {
  return userModel.find({});
}

export async function createNewUser({
  name,
  coffeeGrams,
}: {
  name: string;
  coffeeGrams: number;
}) {
  const newUser = new userModel({ name, coffeeGrams, id: uuid() });
  return newUser.save();
}

export async function updateUserCoffee(userId: string, coffeeGrams: number) {
  const record = await userModel.findOne({ id: userId });
  return record.updateOne({ coffeeGrams });
}

export async function resetAllCoffeeGrams() {
  return userModel.updateMany({}, { coffeeGrams: 0 });
}
