import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/doctor/:userId')
  async findAllPatients(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.findUserDoctor(userId);
  }

  @Delete('/shutdownme/:userId')
  async deleteUserInfo(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUserInfo(userId);
  }
}
