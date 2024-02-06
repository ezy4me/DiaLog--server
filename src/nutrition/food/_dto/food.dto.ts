import { IsNumber, IsString } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  name: string;

  @IsNumber()
  proteins: string;

  @IsNumber()
  fats: string;

  @IsNumber()
  carbohydrates: string;

  @IsNumber()
  energy: string;
}

export class UpdateFoodDto {
  @IsString()
  name: string;

  @IsNumber()
  proteins: string;

  @IsNumber()
  fats: string;

  @IsNumber()
  carbohydrates: string;

  @IsNumber()
  energy: string;
}
