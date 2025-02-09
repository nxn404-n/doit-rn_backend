export const checkAuth = (req, res) => {
  res.json({ username: req.user, userId: req.userId })
}