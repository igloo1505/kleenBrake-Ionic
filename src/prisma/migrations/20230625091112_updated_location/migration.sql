/*
  Warnings:

  - Added the required column `city` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "State" TEXT NOT NULL DEFAULT 'Il',
ADD COLUMN     "city" TEXT NOT NULL;
