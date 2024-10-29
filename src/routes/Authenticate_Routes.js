import {Router} from "express";
import {register,login} from "../controllers/Authenticate_Controller.js";

const router = Router()

router.post('/register',register) // paths
router.post('/login',login)

export default router