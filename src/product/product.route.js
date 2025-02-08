import { Router } from "express";
import { validateToken } from "../validators/auth.validator.js";
import { authorization } from "../middleware/authorization.js";
import { addProduct, getProductById, getProducts } from "./product.controller.js";
import { authentication } from "../middleware/authentication.js";
import { validateGetProducts, validateProduct, validateProductById } from "../validators/product.validator.js";

const router = Router();

//Add a new product
router.post('/', validateToken, authorization, authentication('admin'), validateProduct, addProduct);

//List all products
router.get('/', validateGetProducts, getProducts);

//Get a single product by its ID
router.get('/:id', validateProductById, getProductById);

//Update a product
// router.put();

//Delete a product
// router.delete();

export default router;