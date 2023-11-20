import mongoose, { Schema } from "mongoose";
import { models } from "mongoose";

const AddFriendSchema = new Schema(
  {
    _id: { type: String, required: true, unique: true },
    incoming_friend_requests: [
      {
        type: String,
      },
    ],
  },

  { timestamps: true }
);

const AddFriend =
  models.FriendRequests || mongoose.model("FriendRequests", AddFriendSchema);

export default AddFriend;
