import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.databaseService.user.findFirst({
      where: { email },
    });
  }
}
