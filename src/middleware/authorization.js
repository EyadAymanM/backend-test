import { promisify } from 'node:util'
import jwt from 'jsonwebtoken';

export const authorization = async (req, res, next) => {
  try {
    let payload = await promisify(jwt.verify)(req.headers.authorization, process.env.JWT_SECRET)
    req.role = payload.role
    next()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}