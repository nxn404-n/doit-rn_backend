import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    task: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "People",
      required: true,
    }
  },
  {
     timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;