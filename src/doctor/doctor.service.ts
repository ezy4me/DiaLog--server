import { NutritionService } from './../nutrition/nutrition.service';
import { Injectable } from '@nestjs/common';
import { BloodSugarService } from 'src/blood-sugar/blood-sugar.service';
import { DatabaseService } from 'src/database/database.service';
import { InsulinDosageService } from 'src/insulin-dosage/insulin-dosage.service';

@Injectable()
export class DoctorService {
  constructor(
    private readonly databaseServise: DatabaseService,
    private readonly bloodSugaService: BloodSugarService,
    private readonly insulinDosageService: InsulinDosageService,
    private readonly nutritionService: NutritionService,
  ) {}

  private async isDoctor(userId: number): Promise<boolean> {
    const user = await this.databaseServise.user.findFirst({
      where: { id: userId },
    });

    if (user.role === 'DOCTOR') {
      return true;
    }

    return false;
  }

  async findAllPatients(doctorId: number) {
    const doctor = await this.isDoctor(doctorId);
    if (doctor) {
      return this.databaseServise.patientPermisson.findMany({
        where: { doctorId },
        include: {
          patient: {
            include: {
              profile: {
                include: { diabetesType: true },
              },
            },
          },
        },
      });
    }
  }

  async findPatientInfo(patientId: number, targetDate?: any) {
    console.log(targetDate);

    const bloodSugar = await this.bloodSugaService.findOne(
      patientId,
      targetDate,
    );

    const insulinDosage = await this.insulinDosageService.findOne(
      patientId,
      targetDate,
    );

    const nutrition = await this.nutritionService.findAllByUserId(
      patientId,
      targetDate,
    );

    return {
      bloodSugar,
      insulinDosage,
      nutrition,
    };
  }
}
