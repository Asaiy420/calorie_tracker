import { Router } from "express";
import { getAllFoods } from "../controllers/food.controller";


const router = Router();

router.get("/", getAllFoods)

export default router;