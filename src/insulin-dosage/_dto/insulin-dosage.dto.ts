import { IsDate, IsNumber, IsTimeZone } from 'class-validator';

export class CreateInsulinDosageDto {
  @IsNumber()
  value: number;

  @IsDate()
  date: Date;

  @IsTimeZone()
  time: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  insulinTypeId: number;
}

export class UpdateInsulinDosageDto {
  @IsNumber()
  value: number;

  @IsDate()
  date: Date;

  @IsTimeZone()
  time: string;

  @IsNumber()
  insulinTypeId: number;
}
