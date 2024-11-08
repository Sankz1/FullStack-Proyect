import {Router} from "express";
import {register, login, logout, profile} from "../controllers/Authenticate_Controller.js";
import {validateToken} from "../middlewares/validateToken.js";

const router = Router()

router.post('/register',register) // paths
router.post('/login',login)
router.post('/logout',logout)
router.get("/profile",validateToken,profile)

export default router