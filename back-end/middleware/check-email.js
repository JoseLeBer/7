const validator = require("validator");

module.exports = (req, res, next) => {
  if (!validator.isEmail(req.body.user_email)) {
    res.status(400).json({
      message: "Your email address format is not valid.",
    });
  } else {
    next();
  }
};
