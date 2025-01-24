// External imports
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Internal imports
import People from "../Models/peopleSchema.js";

// Create user
export const createUser = async(req, res) => {
  try {
    const { username, password } = req.body;
    
    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        error: "Username and password are required"
      });
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        error: "Username is already taken"
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new People({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: { id: newUser._id, username: newUser.username }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user
export const deleteUser = async(req, res) => {
  try {
    const user = await People.findByIdAndDelete(req.params.id);

    // If the user doesnt exist
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }
    
    res.status(200).json({
      message: "User was removed successfully!"
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login to an existing user
export const login = async(req, res) => {
  try {
    // Get data from the request body
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        "message": "Authentication failed!"
      })
    };

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        "message": "Authentication failed!"
      })
    };

    // Generate JWT token
    const token = jwt.sign(
      {
        username: user.username,
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h'
      }
    );

    res.status(200).json({
      "access_token": token,
      "message": "Login successful"
    })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}