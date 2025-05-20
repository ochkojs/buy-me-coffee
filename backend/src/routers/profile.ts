import { Router } from "express";
import { createProfile } from "../controllers/profile";

export const profileRouter = Router();

profileRouter.post("/create", createProfile as any);
