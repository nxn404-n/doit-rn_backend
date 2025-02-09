// External imports
import bcrypt from 'bcrypt';

// Internal imports
import People from "../Models/peopleSchema.js";
import { generateAndSetToken } from '../Helpers/generateAndSetToken.js';
import Todo from '../Models/todoSchema.js';

// Signup
export const createUser = async(req, res) => {
  try {
    const { username, password } = req.body;
    const lowercaseUsername = username.toLowerCase();
    
    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        error: "Username and password are required"
      });
    }

    // Check if the username is already taken
    const existingUser = await People.findOne({ username:lowercaseUsername });
    if (existingUser) {
      return res.status(409).json({
        error: "Username is already taken"
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user and set loggedIn to true
    const newUser = new People({ username:lowercaseUsername, password: hashedPassword, loggedIn: true });
    await newUser.save();



    // Generate and set JWT token in cookies
    generateAndSetToken(newUser, res)

    res.status(201).json({
      message: "User created successfully",
      user: { id: newUser._id, username: newUser.username },
      loggedIn: true
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user with its todos
export const deleteUser = async(req, res) => {
  try {
    const userId = await People.findByIdAndDelete(req.params.id);

    // If the user doesnt exist
    if (!userId) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Delete associated todos
    await Todo.deleteMany({userId})
    
    res.status(200).json({
      message: "User was removed successfully!"
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
export const login = async(req, res) => {
  try {
    // Get data from the request body
    const { username, password } = req.body;
    const lowercaseUsername = username.toLowerCase();

    // Check if user exists
    const user = await People.findOne({ username: lowercaseUsername });
    
    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (user && isMatch) {
      user.loggedIn = true;
      await user.save();
      // Generate and set JWT token in cookies
      generateAndSetToken(user, res)
      res.status(200).json({
        message: "Logged in successfully!",
        user: { id: user._id, username: user.username },
        loggedIn: user.loggedIn
      })
    } else {
      res.status(401).json({
        error: "Authentication failed!"
      })
    };

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Log out
export const logout = async(req, res) => {
  try {
    // Get data from the request params
    const id = req.params.id;

    // Check if user exists
    const user = await People.findById(id);

    if (user) {
      user.loggedIn = false;
      await user.save();
      res.status(200).json({
        message: "Logged out successfully!",
        loggedIn: user.loggedIn
      })
    } else {
      res.status(401).json({
        error: "Authentication failed!"
      })
    };

    res.status(200).json({
      message: "Log out successful"
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}