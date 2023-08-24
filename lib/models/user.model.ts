import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: String,
  bio: String,
  threads: [ // Reference to more than one threads
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communities: [ // Reference to more than one communities
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema); // First time - the model will be created, then it gonna take the created model

export default User;
