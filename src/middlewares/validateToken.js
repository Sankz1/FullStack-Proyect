import JWT from "jsonwebtoken";
import {SECRET_TOKEN} from "../config.js";

export const validateToken = (request,resp,next) => {
 const {token} = request.cookies;
 if (!token) {
  return resp.status(403).json({message:"No token provided"});
 }

  JWT.verify(token, SECRET_TOKEN, (err, decoded) => {
   if (err) {return resp.status(403).json({message:"Invalid token"});}
   request.decodedUser=decoded;
  })
 next()
}