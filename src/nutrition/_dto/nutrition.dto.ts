import { IsDate, IsTimeZone, IsNumber } from 'class-validator';

export class CreateNutritionDto {
  @IsDate()
  date: Date;

  @IsTimeZone()
  time: string;

  @IsNumber()
  dishId: number;

  @IsNumber()
  nutritionTypeId: number;
}

export class UpdateNutritionDto {
  @IsDate()
  date: Date;

  @IsTimeZone()
  time: string;

  @IsNumber()
  dishId: number;

  @IsNumber()
  userId: number;

  @IsNumber()
  nutritionTypeId: number;
}
