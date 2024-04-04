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

  async createPermission(doctorId: number, token: string) {
    const profile = await this.databaseServise.profile.findFirst({
      where: {
        token,
      },
    });

    const isExist = await this.databaseServise.patientPermisson.findFirst({
      where: {
        patientId: profile.userId,
      },
    });

    if (!isExist) {
      await this.databaseServise.patientPermisson.create({
        data: {
          doctorId,
          patientId: profile.userId,
        },
      });

      const chat = await this.databaseServise.chat.findMany({
        where: {
          patientId: profile.userId,
        },
      });

      if (!chat[0]) {
        console.log(1);

        await this.databaseServise.chat.create({
          data: {
            doctorId,
            patientId: profile.userId,
          },
        });
      }
    }
  }

  async deletePermission(doctorId: number, patientId: number) {
    const permission = await this.databaseServise.patientPermisson.findMany({
      where: {
        doctorId,
        patientId,
      },
    });

    return this.databaseServise.patientPermisson.delete({
      where: {
        id: permission[0].id,
      },
    });
  }

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
