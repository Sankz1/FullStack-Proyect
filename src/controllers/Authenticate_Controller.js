//Controllers of routes
import User from "../models/userModel.js";
export const  register = async (request, resp) => {
    const {contactEmail, username, password} = request.body
    try {
        const newUser = new User({
            username,
            password,
            contactEmail
        })
        await newUser.save()
        resp.send('registered')
    } catch(error){
        console.log(error)
    }


}
export const login = (request,resp) => {resp.send("logged")}
