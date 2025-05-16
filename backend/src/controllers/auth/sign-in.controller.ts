import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { secret_key } from "../../utils/env";

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) return res.status(401).send({ message: "User not found" });

    const isMatch = compareSync(password, user.password);

    if (!isMatch) return res.send({ message: "email or password wrong" });

    const token = jwt.sign(user, secret_key as any, { expiresIn: 3600 });
    res.cookie("token", token, {
      maxAge: 60 * 1000 * 10,
      secure: false, // Deploy-дох үед true болгох ёстой
    });
    return res.send({ message: "Success", token: token });

    // return res.send({
    //   success: true,
    //   message: user,
    // });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
