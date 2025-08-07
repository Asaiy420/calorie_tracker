import { Router } from "express";
import { getAllFoods, searchFoods } from "../controllers/food.controller";


const router = Router();

router.get("/", getAllFoods)
router.get("/search", searchFoods);

export default router;