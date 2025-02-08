import { model, Schema, SchemaTypes } from "mongoose";

const authSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin','user'],
    default: 'user',
  }
});

export const authModel = model('users', authSchema)