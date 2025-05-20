/*
  Warnings:

  - Added the required column `about` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatarImage` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `backgroundImage` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socialMediaUrl` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `successMessage` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "avatarImage" TEXT NOT NULL,
ADD COLUMN     "backgroundImage" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "socialMediaUrl" TEXT NOT NULL,
ADD COLUMN     "successMessage" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
