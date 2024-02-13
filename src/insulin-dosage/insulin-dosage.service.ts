import { Injectable, NotFoundException } from '@nestjs/common';
import { InsulinDosage } from '@prisma/client';
import {
  CreateInsulinDosageDto,
  UpdateInsulinDosageDto,
} from './_dto/insulin-dosage.dto';
import { DatabaseService } from 'src/database/database.service';
import { startOfDay, endOfDay } from 'date-fns';

@Injectable()
export class InsulinDosageService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<InsulinDosage[]> {
    return this.databaseService.insulinDosage.findMany();
  }

  async findOne(userId: number, targetDate?: Date): Promise<InsulinDosage[]> {
    if (targetDate) {
      const startOfTargetDate = startOfDay(targetDate);
      const endOfTargetDate = endOfDay(targetDate);
      return this.databaseService.insulinDosage.findMany({
        where: {
          userId,
          date: { gte: startOfTargetDate, lte: endOfTargetDate },
        },
        orderBy: { date: 'asc' },
      });
    }

    const insulinDosage = await this.databaseService.insulinDosage.findMany({
      where: { userId },
      orderBy: { date: 'asc' },
    });

    if (!insulinDosage.length) {
      throw new NotFoundException(
        `Insulin Dosage data for user with id ${userId} not found`,
      );
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
    return this.databaseService.insulinDosage.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<InsulinDosage> {
    return this.databaseService.insulinDosage.delete({
      where: { id },
    });
  }
}
