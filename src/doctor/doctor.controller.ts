import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  //   Patch,
  //   Delete,
  //   Body,
  Param,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctor')
@UseInterceptors(ClassSerializerInterceptor)
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('/:doctorId')
  async findAllPatients(@Param('doctorId', ParseIntPipe) doctorId: number) {
    return this.doctorService.findAllPatients(doctorId);
  }

  @Get('/patient/:patientId')
  async findPatientInfo(
    @Param('patientId', ParseIntPipe) patientId: number,
    @Query('date') dateString: string,
  ) {
    return this.doctorService.findPatientInfo(patientId, dateString);
  }

  @Post('/:doctorId')
  async create(
    @Param('doctorId', ParseIntPipe) doctorId: number,
    @Query('token') token: string,
  ) {
    return this.doctorService.createPermission(doctorId, token);
  }

  //   @Get(':id')
  //   async findOne(@Param('id', ParseIntPipe) id: number): Promise<Dish> {
  //     return this.doctorService.findOne(id);
  //   }

  //   @Patch(':id')
  //   async update(
  //     @Param('id', ParseIntPipe) id: number,
  //     @Body() dto,
  //   ): Promise<Dish> {
  //     return this.doctorService.update(id, dto);
  //   }

  //   @Delete(':id')
  //   async delete(@Param('id', ParseIntPipe) id: number): Promise<Dish> {
  //     return this.doctorService.delete(id);
  //   }
}
