import type { Request, Response } from "express";
import { prisma } from "../prisma/client";
import bcrypt from "bcryptjs";

export const signUpHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Please fill the required fields" });
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      res.status(400).json({ message: "User with this email already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(200).json({
      message: "User created successfully!",
      user: newUser,
    });

    return;
  } catch (e) {
    console.error("Error when signing up", e);
    res.status(500).json({ message: "Error when signing up" });
  }
};

export const signInHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Please fill the required fields" });
      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!existingUser) {
      res.status(400).json({ message: "User with this email does not exist" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser?.password
    );
    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid Credentials" });
      return;
    }

    const { password: _, ...userWithoutPassword } = existingUser;

    res.status(200).json({
      message: "User signed in successfully!",
      user: userWithoutPassword,
    });
  } catch (e) {
    console.error("Error when signing up", e);
    res.status(500).json({ message: "Error when signing in" });
  }
};
