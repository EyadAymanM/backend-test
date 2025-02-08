import { Router } from "express";
import { login } from "./auth.controller.js";
import { validateLogIn } from "../validators/auth.validator.js";

const router = Router();

//User login
router.post("/login", validateLogIn, login);

//## User Register ##
// router.post('/register');

export default router;
