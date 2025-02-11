export const checkAuth = (req, res) => {
  res.json({ username: req.username, userId: req.userId })
}