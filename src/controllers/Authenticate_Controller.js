//Controllers of routes
import User from "../models/userModel.js";
import crypt from "bcryptjs";
import JWT from "jsonwebtoken";

export const register = async (request, resp) => {
  const { contactEmail, username, password } = request.body;
  try {
    const passwordEncrypted = await crypt.hash(password, 10);

    const newUser = new User({
      username,
      password: passwordEncrypted,
      contactEmail,
    });

    const userSave = await newUser.save();
    JWT.sign(
      {
        id: userSave._id,
      },
      "test123",
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) console.log(err);
        resp.cookie("token", token);
        resp.statusCode = 200;
        resp.json({
          message: "User created successfully",
        });
      },
    );

    /*    resp.json({
                                                          id: userSave._id,
                                                          username: userSave.username,
                                                          email: userSave.contactEmail,
                                                        });*/
  } catch (error) {
    console.log(error);
    resp.statusCode = 400;
    resp.json({
      message: "The user is already registered",
    });
  }
};
export const login = (request, resp) => {
  resp.send("logged");
};
