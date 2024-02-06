import { Injectable, NotFoundException } from '@nestjs/common';
import { BloodSugar } from '@prisma/client';
import {
  CreateBloodSugarDto,
  UpdateBloodSugarDto,
} from './_dto/blood-sugar.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BloodSugarService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<BloodSugar[]> {
    return this.databaseService.bloodSugar.findMany();
  }

  async findOne(id: number): Promise<BloodSugar> {
    const bloodSugar = await this.databaseService.bloodSugar.findUnique({
      where: { id },
    });

    if (!bloodSugar) {
      throw new NotFoundException(`Blood sugar with id ${id} not found`);
    }

    return bloodSugar;
  }

  async create(dto: CreateBloodSugarDto): Promise<BloodSugar> {
    return this.databaseService.bloodSugar.create({
      data: { ...dto },
    });
  }

  async update(id: number, dto: UpdateBloodSugarDto): Promise<BloodSugar> {
    await this.findOne(id);

    return this.databaseService.bloodSugar.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<BloodSugar> {
    await this.findOne(id);

    return this.databaseService.bloodSugar.delete({
      where: { id },
    });
  }
}
