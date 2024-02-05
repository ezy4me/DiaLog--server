import { IsString, IsNumber } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  token: string;

  @IsString()
  name: string;

  @IsString()
  gender: string;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  userId: number;

  @IsNumber()
  diabetesTypeId: number;
}

export class UpdateProfileDto {
  @IsString()
  name: string;

  @IsString()
  gender: string;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  diabetesTypeId: number;
}
