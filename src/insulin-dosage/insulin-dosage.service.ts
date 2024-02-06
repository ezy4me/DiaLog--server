import { Injectable, NotFoundException } from '@nestjs/common';
import { InsulinDosage } from '@prisma/client';
import {
  CreateInsulinDosageDto,
  UpdateInsulinDosageDto,
} from './_dto/insulin-dosage.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class InsulinDosageService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<InsulinDosage[]> {
    return this.databaseService.insulinDosage.findMany();
  }

  async findOne(id: number): Promise<InsulinDosage> {
    const insulinDosage = await this.databaseService.insulinDosage.findUnique({
      where: { id },
    });

    if (!insulinDosage) {
      throw new NotFoundException(`Insulin dosage with id ${id} not found`);
    }

    return insulinDosage;
  }

  async create(dto: CreateInsulinDosageDto): Promise<InsulinDosage> {
    return this.databaseService.insulinDosage.create({
      data: { ...dto },
    });
  }

  async update(
    id: number,
    dto: UpdateInsulinDosageDto,
  ): Promise<InsulinDosage> {
    await this.findOne(id);

    return this.databaseService.insulinDosage.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<InsulinDosage> {
    await this.findOne(id);

    return this.databaseService.insulinDosage.delete({
      where: { id },
    });
  }
}
