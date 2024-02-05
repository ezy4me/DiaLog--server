import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto, UpdateProfileDto } from './dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':userId')
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('userId', ParseIntPipe) userId: number) {
    return this.profileService.findOne(userId);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Patch(':userId')
  @UseInterceptors(ClassSerializerInterceptor)
  async update(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.update(userId, updateProfileDto);
  }

  @Delete(':userId')
  @UseInterceptors(ClassSerializerInterceptor)
  async delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.profileService.delete(userId);
  }
}
