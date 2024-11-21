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
export const login = async (request, resp) => {
  const { username, password } = request.body;
  try {
    const foundUser = await User.findOne({ username });
    if (!foundUser) return resp.status(401).json({ message: "User not found" });
    const passwordCompare = await crypt.compare(password, foundUser.password);
    if (!passwordCompare)
      return resp.status(401).json({ message: "Invalid credentials" });

    const token = await accessToken({ id: foundUser._id });
    resp.cookie("token", token);
    resp.statusCode = 200;
    resp.json({
      message: "Logged Successfully",
    });
  } catch (error) {
    resp.status(400).json({
      message: "The user is not on the database",
    });
  }
};
export const logout = (request, resp) => {
  resp.cookie("token", " ", {
    expires: new Date(0),
  });
  return resp.sendStatus(200);
};
export const profile = async (request, resp) => {
  const userFounded = await User.findById(request.decodedUser.id);

  if (!userFounded) {
    return resp.status(400).json({ message: "User not found" });
  }
  return resp.status(200).json({
    id: userFounded._id,
    username: userFounded.username,
  });
};
