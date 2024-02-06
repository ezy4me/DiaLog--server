import { IsNumber, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  name: string;

  @IsNumber()
  proteins: number;

  @IsNumber()
  fats: number;

  @IsNumber()
  carbohydrates: number;

  @IsNumber()
  energy: number;
}

export class UpdateFoodDto {
  @IsString()
  name: string;

  @IsNumber()
  proteins: number;

  @IsNumber()
  fats: number;

  @IsNumber()
  carbohydrates: number;

  @IsNumber()
  energy: number;
}
