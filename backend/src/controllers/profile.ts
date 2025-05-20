import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const createProfile = async (req: Request, res: Response) => {
  const {
    name,
    about,
    avatarImage,
    backgroundImage,
    socialMediaUrl,
    successMessage,
    user,
  } = req.body;

  try {
    const response = await prisma.profile.create({
      data: {
        name: "John Doe",
        about: "Software developer",
        avatarImage: "https://example.com/avatar.jpg",
        backgroundImage: "https://example.com/bg.jpg",
        socialMediaUrl: "https://twitter.com/john123",
        successMessage: "Welcome to my profile!",
        createdAt: new Date(),
        updatedAt: new Date(),
        user: {
          connect: { id: 8 },
        },
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
