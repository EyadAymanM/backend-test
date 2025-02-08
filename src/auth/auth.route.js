import { Router } from "express";
import { login, register } from "./auth.controller.js";
import { validateLogIn } from "../validators/auth.validator.js";

const router = Router();

//User login
router.post("/login", validateLogIn, login);

//## User Register ##
router.post('/register', validateLogIn, register);

export default router;
