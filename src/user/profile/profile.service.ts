import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateProfileDto, UpdateProfileDto } from './_dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findOne(userId: number): Promise<Profile | null> {
    const profile = await this.databaseService.profile.findUnique({
      where: { userId },
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  async create(dto: CreateProfileDto): Promise<Profile> {
    console.log(dto);

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
    await this.findOne(userId);

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
    const existingProfile = await this.findOne(userId);
    if (!existingProfile) {
      throw new NotFoundException('Profile not found');
    }

    return this.databaseService.profile.delete({
      where: { userId },
    });
  }
}
