import { Router } from "express";
import { validateToken } from "../validators/auth.validator.js";
import { authorization } from "../middleware/authorization.js";
import { addProduct } from "./product.controller.js";
import { authentication } from "../middleware/authentication.js";

const router = Router();

//Add a new product
router.post('/', validateToken ,authorization, authentication('admin') , addProduct);

//List all products
// router.get();

//Get a single product by its ID
// router.get();

//Update a product
// router.put();

//Delete a product
// router.delete();

export default router;