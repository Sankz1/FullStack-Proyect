import { Router } from "express";
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/Authenticate_Controller.js";
import { validateToken } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/Validator_Schema.js";
import { loginSchema, registerSchema } from "../schemas/Schema_Validation.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register); // paths
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/profile", validateToken, profile);

export default router;
