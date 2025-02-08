import { body, query, validationResult } from "express-validator";

export const validateProduct = [

  body("name")
    .isString().withMessage("Name must be a string")
    .notEmpty().withMessage("Name is required"),

  body("category")
    .isString().withMessage("Category must be a string")
    .notEmpty().withMessage("Category is required"),

  body("price")
    .isNumeric().withMessage("Price must be a number")
    .custom(value => value > 0).withMessage("Price must be greater than zero"),

  body("quantity")
    .isInt({ min: 0 }).withMessage("Quantity must be a non-negative integer"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ message: "wrong product input", errors: errors.array() })
    }
    next()
  },

]

export const validateGetProducts = [
  query('page')
    .isInt().withMessage('Page value must be an Intger Number')
    .custom(value => value > 0).withMessage("Page value must be greater than zero"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ message: "wrong page query", errors: errors.array() })
    }
    next()
  },
  
]