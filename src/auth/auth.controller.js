import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import { authModel } from "./auth.model.js";

export const login = async (req, res) => {
  try {
    const user = await authModel.findOne({ email: req.body['email'] });

    if (!user)
      return res.status(404).json({ message: "no user registered with this email" });

    const match = await bcrypt.compare(req.body["password"], user["password"]);

    // //this was before implementing password hashing
    // const match = req.body["password"] == user["password"] ? true : false;

    if (!match)
      return res.status(403).json({ message: "Wrong email or password" });

    const token = jwt.sign({ sub: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });

    res.status(201).json({ message: "success", data: token })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const user = await authModel.findOne({ email: req.body['email'] });
    if(user){
      return res.status(409).json({ message: "email already exist" })
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body['password'],salt)

    const createdUser = await authModel.create({ email: req.body['email'], password: hash });
    
    res.status(201).json({ message: "User created successfully", data: { email: createdUser.email, role: createdUser.role } })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};