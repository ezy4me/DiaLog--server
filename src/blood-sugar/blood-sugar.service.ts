import { Injectable, NotFoundException } from '@nestjs/common';
import { BloodSugar } from '@prisma/client';
import {
  CreateBloodSugarDto,
  UpdateBloodSugarDto,
} from './_dto/blood-sugar.dto';
import { DatabaseService } from 'src/database/database.service';
import { startOfDay, endOfDay } from 'date-fns';

@Injectable()
export class BloodSugarService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<BloodSugar[]> {
    return this.databaseService.bloodSugar.findMany();
  }

  async findOne(userId: number, targetDate?: Date): Promise<BloodSugar[]> {
    if (targetDate) {
      const startOfTargetDate = startOfDay(targetDate);
      const endOfTargetDate = endOfDay(targetDate);
      const test = await this.databaseService.bloodSugar.findMany({
        where: {
          userId,
          date: { gte: startOfTargetDate, lte: endOfTargetDate },
        },
        orderBy: { date: 'asc' },
      });

      return test;
    }

    const bloodSugar = await this.databaseService.bloodSugar.findMany({
      where: { userId },
      orderBy: { date: 'asc' },
    });

    if (!bloodSugar.length) {
      throw new NotFoundException(
        `Blood sugar data for user with id ${userId} not found`,
      );
    }

    return bloodSugar;
  }

  async create(dto: CreateBloodSugarDto): Promise<BloodSugar> {
    return this.databaseService.bloodSugar.create({
      data: { ...dto },
    });
  }

  async update(id: number, dto: UpdateBloodSugarDto): Promise<BloodSugar> {
    return this.databaseService.bloodSugar.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<BloodSugar> {
    return this.databaseService.bloodSugar.delete({
      where: { id },
    });
  }
}
