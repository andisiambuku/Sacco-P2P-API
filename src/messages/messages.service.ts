import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async create(
    createMessageDto: CreateMessageDto,
    userId: string,
  ): Promise<Message> {
    const message = this.messageRepository.create({
      ...createMessageDto,
      user: { id: userId },
    });
    return this.messageRepository.save(message);
  }

  findAll(userId: string): Promise<Message[]> {
    return this.messageRepository.find({
      where: { user: { id: userId } },
    });
  }

  async findOne(id: string, userId: string): Promise<Message> {
    return this.messageRepository.findOne({
      where: { id, user: { id: userId } },
    });
  }

  async remove(id: string): Promise<void> {
    await this.messageRepository.delete(id);
  }
}
