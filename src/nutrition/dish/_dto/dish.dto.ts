import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateDishDto {
  @IsString()
  name: string;

  @IsBoolean()
  status: boolean;

  @IsNumber()
  userId: number;
}

export class UpdateDishDto {
  @IsString()
  name: string;

  @IsBoolean()
  status: boolean;

  @IsNumber()
  userId: number;
}
