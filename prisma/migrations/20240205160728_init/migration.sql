-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "profileId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientPermisson" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "PatientPermisson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "tokjen" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "height" DECIMAL(65,30) NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER NOT NULL,
    "diabetesTypeId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiabetesType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DiabetesType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsulinDosage" (
    "id" SERIAL NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "insulinTypeId" INTEGER NOT NULL,

    CONSTRAINT "InsulinDosage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsulinType" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "InsulinType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodSugar" (
    "id" SERIAL NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BloodSugar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatHistory" (
    "id" SERIAL NOT NULL,
    "messageId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,

    CONSTRAINT "ChatHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nutrition" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "dishId" INTEGER NOT NULL,
    "nutritionTypeId" INTEGER NOT NULL,

    CONSTRAINT "Nutrition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NutritionType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "NutritionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "proteins" DECIMAL(65,30) NOT NULL,
    "fats" DECIMAL(65,30) NOT NULL,
    "carbohydrates" DECIMAL(65,30) NOT NULL,
    "energy" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodDishes" (
    "id" SERIAL NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "dishId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,

    CONSTRAINT "FoodDishes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_role_key" ON "User"("role");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_tokjen_key" ON "Profile"("tokjen");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DiabetesType_name_key" ON "DiabetesType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ChatHistory_messageId_key" ON "ChatHistory"("messageId");

-- CreateIndex
CREATE UNIQUE INDEX "ChatHistory_chatId_key" ON "ChatHistory"("chatId");

-- CreateIndex
CREATE UNIQUE INDEX "NutritionType_name_key" ON "NutritionType"("name");

-- AddForeignKey
ALTER TABLE "PatientPermisson" ADD CONSTRAINT "PatientPermisson_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientPermisson" ADD CONSTRAINT "PatientPermisson_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_diabetesTypeId_fkey" FOREIGN KEY ("diabetesTypeId") REFERENCES "DiabetesType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsulinDosage" ADD CONSTRAINT "InsulinDosage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsulinDosage" ADD CONSTRAINT "InsulinDosage_insulinTypeId_fkey" FOREIGN KEY ("insulinTypeId") REFERENCES "InsulinType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodSugar" ADD CONSTRAINT "BloodSugar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatHistory" ADD CONSTRAINT "ChatHistory_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatHistory" ADD CONSTRAINT "ChatHistory_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutrition" ADD CONSTRAINT "Nutrition_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutrition" ADD CONSTRAINT "Nutrition_nutritionTypeId_fkey" FOREIGN KEY ("nutritionTypeId") REFERENCES "NutritionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodDishes" ADD CONSTRAINT "FoodDishes_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodDishes" ADD CONSTRAINT "FoodDishes_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
