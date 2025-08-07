import { Router } from "express";
import { signInHandler, signUpHandler } from "../controllers/auth.controller";

const router = Router();

router.post("/sign-up", signUpHandler);
router.post("/sign-in", signInHandler);
