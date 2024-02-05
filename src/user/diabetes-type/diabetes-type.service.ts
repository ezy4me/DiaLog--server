import { Injectable, NotFoundException } from '@nestjs/common';
import { DiabetesType } from '@prisma/client';
import {
  CreateDiabetesTypeDto,
  UpdateDiabetesTypeDto,
} from './_dto/diabetes-type.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DiabetesTypeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<DiabetesType[]> {
    return this.databaseService.diabetesType.findMany();
  }

  async findOne(id: number): Promise<DiabetesType> {
    const diabetesType = await this.databaseService.diabetesType.findUnique({
      where: { id },
    });
    if (!diabetesType) {
      throw new NotFoundException(`Diabetes type with id ${id} not found`);
    }
    return diabetesType;
  }

  async create(dto: CreateDiabetesTypeDto): Promise<DiabetesType> {
    return this.databaseService.diabetesType.create({
      data: { ...dto },
    });
  }

  async update(id: number, dto: UpdateDiabetesTypeDto): Promise<DiabetesType> {
    await this.findOne(id);

    return this.databaseService.diabetesType.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<DiabetesType> {
    await this.findOne(id);

    return this.databaseService.diabetesType.delete({
      where: { id },
    });
  }
}
