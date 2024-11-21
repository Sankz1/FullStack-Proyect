import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import {
  deleteTask,
  getOneTask,
  getTasks,
  postTask,
  putTask,
} from "../controllers/tasks_Controllers.js";

const router = Router();
router.post("/tasks", validateToken, postTask);
router.get("/tasks", validateToken, getTasks);
router.get("/tasks/:id", validateToken, getOneTask);
router.put("/tasks/:id", validateToken, putTask);
router.delete("/tasks/:id", validateToken, deleteTask);

export default router;
