import { IsString } from 'class-validator';

export class CreateDiabetesTypeDto {
  @IsString()
  name: string;
}

export class UpdateDiabetesTypeDto {
  @IsString()
  name: string;
}
