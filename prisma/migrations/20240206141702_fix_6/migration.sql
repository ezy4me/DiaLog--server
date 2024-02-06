/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `InsulinType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `InsulinType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InsulinType" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "InsulinType_name_key" ON "InsulinType"("name");
