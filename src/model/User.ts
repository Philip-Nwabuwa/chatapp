import mongoose, { Schema } from "mongoose";
import { models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", UserSchema);

export default User;
