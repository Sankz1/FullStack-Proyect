//Controllers of routes
import User from "../models/userModel.js";
import crypt from 'bcryptjs'
export const  register = async (request, resp) => {
    const {contactEmail, username, password} = request.body
    try {
      const passwordEncrypted = await crypt.hash(password, 10)
        const newUser = new User({
            username,
            password: passwordEncrypted,
            contactEmail
        })
const userSave =    await newUser.save()
        resp.send(userSave)
    } catch(error){
        console.log(error)
    }


}
export const login = (request,resp) => {resp.send("logged")}
