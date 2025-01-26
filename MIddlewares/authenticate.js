// External imports
import jwt  from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  try {
    // Getting the token from the header
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    // Verifying the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, userId } = decoded;

    // Storing the data in req
    req.username = username;
    req.userId = userId;
    next();
  } catch {
    res.status(500).json({
      message: "There was an server side error!"
    })
  }
};

export default authenticate;