// External imports
import jwt  from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  try {
    // Getting the token from the cookie
    const token = req.cookies.jwt;

    // If token not found
    if (!token) {
      return res.status(401).json({ message: "Authentication token not found!" });
    }
    // Verifying the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userId } = decoded;

    // Storing data in req
    req.username = username;
    req.userId = userId;
    next();
  } catch (error) {
    res.status(401).json({
      message: "JWT authentication failed!",
      error: error.message,
    });
  }
};

export default authenticate;