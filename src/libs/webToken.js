import JWT from "jsonwebtoken";
import { SECRET_TOKEN } from "../config.js";

export function accessToken(payload) {
  return new Promise((resolve, reject) => {
    // If all is good, Resolve else Reject
    JWT.sign(
      payload,
      SECRET_TOKEN,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) console.log(err);
        resolve(token);
      },
    );
  });
}
