import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.databaseService.user.findFirst({
      where: { email },
    });
  }

  async create(
    email: string,
    password: string,
    role?: string,
  ): Promise<User | undefined> {
    const _user = await this.findOne(email);

    if (_user) {
      throw new ConflictException('User with this email already exists');
    }

    const userRole = role !== undefined ? role : 'USER';

    return this.databaseService.user.create({
      data: {
        email,
        password: this.hashPassword(password),
        role: userRole,
      },
    });
  }

  private hashPassword(password: string) {
    return hashSync(password, genSaltSync(2));
  }

  async findUserDoctor(userId: number) {
    return this.databaseService.patientPermisson.findMany({
      where: {
        patientId: userId,
      },
      include: {
        doctor: {
          select: {
            email: true,
            profile: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async deleteUserInfo(userId: number) {
    return this.databaseService.user.delete({
      where: {
        id: userId,
      },
    });
  }
}
