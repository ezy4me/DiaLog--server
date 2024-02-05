import { Injectable } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateProfileDto, UpdateProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findOne(userId: number): Promise<Profile> {
    return this.databaseService.profile.findUnique({
      where: { userId },
    });
  }

  async create(dto: CreateProfileDto): Promise<Profile> {
    return this.databaseService.profile.create({
      data: {
        token: dto.token,
        name: dto.name,
        gender: dto.gender,
        height: dto.height,
        weight: dto.weight,
        userId: dto.userId,
        diabetesTypeId: dto.diabetesTypeId,
      },
    });
  }

  async update(userId: number, dto: UpdateProfileDto): Promise<Profile> {
    return this.databaseService.profile.update({
      where: { userId },
      data: {
        name: dto.name,
        gender: dto.gender,
        height: dto.height,
        weight: dto.weight,
        diabetesTypeId: dto.diabetesTypeId,
      },
    });
  }

  async delete(userId: number): Promise<Profile> {
    return this.databaseService.profile.delete({
      where: { userId },
    });
  }
}
