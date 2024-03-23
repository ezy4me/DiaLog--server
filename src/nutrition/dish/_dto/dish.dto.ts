import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateDishDto {
  @IsString()
  name: string;

  @IsBoolean()
  status: boolean;

  @IsNumber()
  userId: number;

  foodDishes?: any;
}

export class UpdateDishDto {
  @IsString()
  name: string;

  @IsBoolean()
  status: boolean;

  @IsNumber()
  userId: number;

  foodDishes?: any;
}
