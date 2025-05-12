import { PrismaClient } from "../../generated/prisma"; // танай schema дагуу
import { withAccelerate } from "@prisma/extension-accelerate";

const baseClient = new PrismaClient();
export const prisma = baseClient.$extends(withAccelerate());
