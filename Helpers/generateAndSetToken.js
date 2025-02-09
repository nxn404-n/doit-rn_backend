import jwt from 'jsonwebtoken';

// Helper function to generate JWT token and save it in the cookies
export const generateAndSetToken = (user, res) => {
  // Generate JWT token
  const token = jwt.sign(
    {
      username: user.username,
      userId: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.EXPIRES_IN
    }
  );

  // Saving token in cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "None",
    partitioned: true,
    maxAge: process.env.EXPIRES_IN,
  });
};