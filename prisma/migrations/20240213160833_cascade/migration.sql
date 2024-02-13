-- DropForeignKey
ALTER TABLE "BloodSugar" DROP CONSTRAINT "BloodSugar_userId_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_patientId_fkey";

-- DropForeignKey
ALTER TABLE "ChatHistory" DROP CONSTRAINT "ChatHistory_chatId_fkey";

-- DropForeignKey
ALTER TABLE "ChatHistory" DROP CONSTRAINT "ChatHistory_messageId_fkey";

-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_userId_fkey";

-- DropForeignKey
ALTER TABLE "FoodDishes" DROP CONSTRAINT "FoodDishes_dishId_fkey";

-- DropForeignKey
ALTER TABLE "FoodDishes" DROP CONSTRAINT "FoodDishes_foodId_fkey";

-- DropForeignKey
ALTER TABLE "InsulinDosage" DROP CONSTRAINT "InsulinDosage_insulinTypeId_fkey";

-- DropForeignKey
ALTER TABLE "InsulinDosage" DROP CONSTRAINT "InsulinDosage_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_userId_fkey";

-- DropForeignKey
ALTER TABLE "Nutrition" DROP CONSTRAINT "Nutrition_dishId_fkey";

-- DropForeignKey
ALTER TABLE "Nutrition" DROP CONSTRAINT "Nutrition_nutritionTypeId_fkey";

-- DropForeignKey
ALTER TABLE "PatientPermisson" DROP CONSTRAINT "PatientPermisson_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "PatientPermisson" DROP CONSTRAINT "PatientPermisson_patientId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_diabetesTypeId_fkey";

-- AddForeignKey
ALTER TABLE "PatientPermisson" ADD CONSTRAINT "PatientPermisson_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientPermisson" ADD CONSTRAINT "PatientPermisson_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_diabetesTypeId_fkey" FOREIGN KEY ("diabetesTypeId") REFERENCES "DiabetesType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsulinDosage" ADD CONSTRAINT "InsulinDosage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsulinDosage" ADD CONSTRAINT "InsulinDosage_insulinTypeId_fkey" FOREIGN KEY ("insulinTypeId") REFERENCES "InsulinType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodSugar" ADD CONSTRAINT "BloodSugar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatHistory" ADD CONSTRAINT "ChatHistory_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatHistory" ADD CONSTRAINT "ChatHistory_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutrition" ADD CONSTRAINT "Nutrition_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutrition" ADD CONSTRAINT "Nutrition_nutritionTypeId_fkey" FOREIGN KEY ("nutritionTypeId") REFERENCES "NutritionType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodDishes" ADD CONSTRAINT "FoodDishes_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodDishes" ADD CONSTRAINT "FoodDishes_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;
