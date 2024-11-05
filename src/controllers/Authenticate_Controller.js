//Controllers of routes
import User from "../models/userModel.js";
import crypt from "bcryptjs";
import { accessToken } from "../libs/webToken.js";

export const register = async (request, resp) => {
  const { contactEmail, username, password, name, lastname } = request.body;
  try {
    const passwordEncrypted = await crypt.hash(password, 10);

    const newUser = new User({
      username,
      password: passwordEncrypted,
      contactEmail,
      name,
      lastname,
    });

    const userSave = await newUser.save();
    const token = await accessToken({ id: userSave._id });
    resp.cookie("token", token);
    resp.statusCode = 200;
    resp.json({
      message: "User created successfully",
    });
  } catch (error) {
    resp.status(400).json({
      message: "The user is already registered",
    });
  }
};
export const login = (request, resp) => {
  resp.send("logged");
};
