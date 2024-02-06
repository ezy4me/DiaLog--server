import { IsNumber } from 'class-validator';

export class CreateFoodDishesDto {
  @IsNumber()
  weight: number;

  @IsNumber()
  dishId: number;

  @IsNumber()
  foodId: number;
}

export class UpdateFoodDishesDto {
  @IsNumber()
  weight: number;

  @IsNumber()
  dishId: number;

  @IsNumber()
  foodId: number;
}
