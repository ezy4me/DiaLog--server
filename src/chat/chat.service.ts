import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class ChatService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createMessage(dto: MessageDto) {
    console.log(dto);

    const message = await this.databaseService.message.create({
      data: {
        text: dto.text,
        userId: dto.userId,
        dateTime: new Date(),
      },
    });

    if (message) {
      await this.databaseService.chatHistory.create({
        data: {
          messageId: message.id,
          chatId: dto.chatId,
        },
      });
    }

    return message;
  }

  async getMessages(doctorId: number, patientId: number) {
    const chat = await this.getUserChat(doctorId, patientId);

    if (chat) {
      return this.databaseService.chatHistory.findMany({
        where: {
          chatId: chat[0].id,
        },
        include: {
          message: {
            include: {
              user: {
                select: {
                  email: true,
                  id: true,
                  profile: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    }
  }

  async getUserChat(doctorId: number, patientId: number) {
    const chat = await this.databaseService.chat.findMany({
      where: { patientId, doctorId },
    });

    return chat;
  }
}
