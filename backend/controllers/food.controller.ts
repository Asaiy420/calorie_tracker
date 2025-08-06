
import type { Request, Response } from "express";

export const getAllFoods = async (req: Request, res: Response):Promise<void> => {
    res.send("All foods will be listed here");
}