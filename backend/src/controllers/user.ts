import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  // console.log(email, password, username, "Usename, Pass, email");
  try {
    const response = await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
