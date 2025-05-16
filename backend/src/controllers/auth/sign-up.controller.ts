import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import bcrypt from "bcrypt";

// check user already

const checker = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    if (user) {
      return res.status(401).send({ message: "User already taken" });
    }
    return;
    res.send({ message: "Username available" });
  } catch (error) {}
};

export const signUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  // console.log(email, password, username, "Usename, Pass, email");

  const hashedPassword = bcrypt.hashSync(password, 10);
  try {
    const response = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
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
