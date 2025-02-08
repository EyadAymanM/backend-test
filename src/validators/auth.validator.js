import { body, header, validationResult } from "express-validator";

export const validateLogIn = [
  body("email").isEmail().withMessage("invalid email format"),
  body('password').isLength(6).withMessage('weak password'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
  },
];

export const validateToken = [
  header('authorization').exists().withMessage('You must provide Authorization token'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }
    next()
  },
];