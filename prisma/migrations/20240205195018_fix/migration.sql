/*
  Warnings:

  - You are about to drop the column `tokjen` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `token` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Profile_tokjen_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "tokjen",
ADD COLUMN     "token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_token_key" ON "Profile"("token");
