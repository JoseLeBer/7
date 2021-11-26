const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();

passwordSchema
  .is()
  .min(8)
  .is()
  .max(50)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123", "Motdepasse1", "Azerty12", "Aqwzsxedc1"]);

module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.user_password)) {
    res.status(401).json({
      message:
        "Your password must contain at least: 8 characters, one upper case, one lower case and one number",
    });
  } else {
    next();
  }
};
