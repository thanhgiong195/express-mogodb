const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.headers.authorization || req.query.token || req.headers['x-access-token'];

  if (!token) {
    return res.status(403).json({ message: 'A token is required for authentication' });
  }

  try {
    token = token.replace('Bearer', '').trim();
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
  return next();
};

module.exports = verifyToken;
