import type { Request, Response } from "express";
import { prisma } from "../prisma/client";

export const getAllFoods = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const foods = await prisma.food.findMany();
    res.status(200).json(foods);
  } catch (e) {
    console.error("Error fetching all foods:", e);
    res.status(500).send("Internal Server Error");
  }
};

export const searchFoods = async (
  req: Request,
  res: Response
): Promise<void> => {
  const q = req.query.q as string;

  try {
    const foods = await prisma.food.findMany({
      where: {
        name: {
          contains: q,
          mode: "insensitive",
        },
      },
    });

    if (foods.length === 0) {
      res
        .status(404)
        .json({ message: "No foods found matching your search query" });
      return;
    }

    res.status(200).json(foods);
  } catch (e) {
    console.error("Error searching foods:", e);
    res.status(500).send("Internal Server Error");
  }
};
