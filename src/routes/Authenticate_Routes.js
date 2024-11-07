import {Router} from "express";
import {register, login, logout} from "../controllers/Authenticate_Controller.js";

const router = Router()

router.post('/register',register) // paths
router.post('/login',login)
router.post('/logout',logout)

export default router