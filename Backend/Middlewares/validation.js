const { body, validationResult } = require("express-validator");


exports.Validationregister = [
    body("firstname", "please add a valid firstname").not().isEmpty(),
    body("lastname", "please add a valid lasttname").not().isEmpty(),
  body("email", "please add a valid email").isEmail().normalizeEmail(),
  body("password", "at least 6 characters").isLength({ min: 6 }),
  body("gender", "please select your gender ").not().isEmpty(),
  body("role", "please select your role ").not().isEmpty(),
];
exports.Validationlogin = [
    body("email", "please add a valid email").isEmail(),
    body("password", "at least 6 characters").not().isEmpty(),
  ];
  exports.Validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };