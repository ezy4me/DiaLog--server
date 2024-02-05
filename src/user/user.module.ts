import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [DatabaseModule, ProfileModule],
  providers: [UserService, DatabaseService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
