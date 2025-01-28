import mongoose from "mongoose";

const peopleSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  loggedIn: {
    type: Boolean,
    default: false,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    }
  ]
});

const People = mongoose.model("People", peopleSchema);

export default People;