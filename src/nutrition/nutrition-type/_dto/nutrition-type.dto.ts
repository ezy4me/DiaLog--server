import { IsString } from 'class-validator';

export class CreateNutritionTypeDto {
  @IsString()
  name: string;
}

export class UpdateNutritionTypeDto {
  @IsString()
  name: string;
}
