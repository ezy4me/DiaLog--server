import { IsDate, IsNumber, IsTimeZone } from 'class-validator';

export class CreateBloodSugarDto {
  @IsNumber()
  value: number;

  @IsDate()
  date: Date;

  @IsTimeZone()
  time: string;

  @IsNumber()
  userId: number;
}

export class UpdateBloodSugarDto {
  @IsNumber()
  value: number;

  @IsDate()
  date: Date;

  @IsTimeZone()
  time: string;
}
