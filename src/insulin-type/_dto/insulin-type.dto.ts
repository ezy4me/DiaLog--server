import { IsString } from 'class-validator';

export class CreateInsulinTypeDto {
  @IsString()
  name: string;
}

export class UpdateInsulinTypeDto {
  @IsString()
  name: string;
}
