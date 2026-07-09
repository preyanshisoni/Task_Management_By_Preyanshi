import express from "express";
import dotenv from "dotenv";

import userRouter from "./routes/user.routes.js";
import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import { connectDB } from "./config/db.config.js";
import cors from "cors";


const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

const PORT = process.env.PORT;

connectDB();

app.use("/api/auth", userRouter);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(PORT, ()=>{
console.log("server started on port", PORT);
})