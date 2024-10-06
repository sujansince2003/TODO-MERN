const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({
      message: "Token not provided",
    });
  }
  try {
    const decodedUserData = jwt.verify(
      token.split(" ")[1],
      process.env.JWT_SECRET_KEY
    );
    req.userData = decodedUserData;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid Token",
    });
  }
}

module.exports = auth;
