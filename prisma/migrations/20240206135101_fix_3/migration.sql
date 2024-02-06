/*
  Warnings:

  - You are about to alter the column `value` on the `BloodSugar` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `proteins` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `fats` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `carbohydrates` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `energy` on the `Food` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `weight` on the `FoodDishes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `value` on the `InsulinDosage` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `height` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `weight` on the `Profile` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "BloodSugar" ALTER COLUMN "value" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Food" ALTER COLUMN "proteins" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "fats" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "carbohydrates" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "energy" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "FoodDishes" ALTER COLUMN "weight" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "InsulinDosage" ALTER COLUMN "value" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "height" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "weight" SET DATA TYPE DOUBLE PRECISION;
