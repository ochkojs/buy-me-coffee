import { PrismaClientExtends } from "@prisma/client/scripts/default-index";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prisma = new PrismaClientExtends().$extends(withAccelerate());
