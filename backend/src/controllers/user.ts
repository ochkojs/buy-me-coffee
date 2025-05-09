import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    prisma.User.create({});
    return res.send({
      success: true,
      message: "Success",
    });
  } catch (error) {
    return res.send(error);
  }
};
