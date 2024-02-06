import { Injectable, NotFoundException } from '@nestjs/common';
import { InsulinType } from '@prisma/client';
import {
  CreateInsulinTypeDto,
  UpdateInsulinTypeDto,
} from './_dto/insulin-type.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class InsulinTypeService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(): Promise<InsulinType[]> {
    return this.databaseService.insulinType.findMany();
  }

  async findOne(id: number): Promise<InsulinType> {
    const insulinType = await this.databaseService.insulinType.findUnique({
      where: { id },
    });

    if (!insulinType) {
      throw new NotFoundException(`Insulin type with id ${id} not found`);
    }

    return insulinType;
  }

  async create(dto: CreateInsulinTypeDto): Promise<InsulinType> {
    return this.databaseService.insulinType.create({
      data: { ...dto },
    });
  }

  async update(id: number, dto: UpdateInsulinTypeDto): Promise<InsulinType> {
    await this.findOne(id);

    return this.databaseService.insulinType.update({
      where: { id },
      data: { ...dto },
    });
  }

  async delete(id: number): Promise<InsulinType> {
    await this.findOne(id);

    return this.databaseService.insulinType.delete({
      where: { id },
    });
  }
}
