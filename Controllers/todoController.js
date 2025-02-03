// Internal imports
import People from "../Models/peopleSchema.js";
import Todo from "../Models/todoSchema.js";

// Get all todos of a certain user
export const getAllTodo = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find todos of a certain user and populate the data
    const todos = await Todo.find({ "user": userId }).populate("user", "username");
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create todo
export const createTodo = async (req, res) => {
  try {
    const { task, userId } = req.body;

    // Create and save todo 
    const newTodo = Todo({
      task,
      user: userId
    });
    await newTodo.save();

    // Insert todo id in the user collection
    await People.updateOne({ _id: userId },
    {
      $push: {
        todos: newTodo._id
      }
    })

    res.status(201).json({
      "message": "Todo created successfully"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Todo
export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { completed } = req.body
  
    // Find and update the Todo
    const updatedTodo = await Todo.updateOne({ _id: id }, {
      $set : { completed }
    });
  
    // Check if todo was found and updated
    if (!updateTodo) {
      return res.status(404).json({
        "error": "Todo was not found or no change made"
      })
    };

    res.status(200).json({
      "messege": "Todo was updated successfully!"
    });
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

// Delete Todo
export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    
    // If the todo doesnt exist
    if (!deletedTodo) {
      return res.status(404).json({
        error: "Todo not found",
      });
    };

    res.status(200).json({
      "messege": "Todo was deleted succeessfully!"
    })

  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
}