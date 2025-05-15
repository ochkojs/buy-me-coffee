import { Router } from "express";
import { createUser } from "../controllers/user";

export const userRouter = Router();

userRouter.post("/create", createUser as any);
