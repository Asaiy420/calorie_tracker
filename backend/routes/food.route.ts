import { Router } from "express";
import { addFoods, getAllFoods, searchFoods } from "../controllers/food.controller";


const router = Router();

router.get("/", getAllFoods)
router.get("/search", searchFoods);
router.post("/add", addFoods);

export default router;