import express from "express";
import morgan from "morgan";
import authenticate_Routes from "./routes/Authenticate_Routes.js";
import cookieParser from "cookie-parser";
import tasks_routes from "./routes/tasks_routes.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(morgan("dev"));
app.use(express.json()); //Json interpret
app.use(cookieParser());
app.use("/back", authenticate_Routes);
app.use("/back", tasks_routes);

export default app;
