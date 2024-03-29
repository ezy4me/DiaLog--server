import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { NutritionModule } from './nutrition/nutrition.module';
import { BloodSugarModule } from './blood-sugar/blood-sugar.module';
import { InsulinDosageModule } from './insulin-dosage/insulin-dosage.module';
import { InsulinTypeModule } from './insulin-type/insulin-type.module';
import { DoctorModule } from './doctor/doctor.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    NutritionModule,
    BloodSugarModule,
    InsulinDosageModule,
    InsulinTypeModule,
    DoctorModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [],
})
export class AppModule {}
