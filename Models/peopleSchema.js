import mongoose from "mongoose";

const peopleSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  loggedIn: {
    type: Boolean,
  }
});

const People = mongoose.model("People", userSchema);

export default People;