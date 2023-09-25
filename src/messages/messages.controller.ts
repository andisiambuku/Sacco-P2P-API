import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  UnauthorizedException,
  Request,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async create(
    @Body() createmessageDto: CreateMessageDto,
    @Request() req: any,
  ): Promise<Message> {
    const userId = req.user.id;
    return this.messagesService.create(createmessageDto, userId);
  }

  @Get()
  async findAll(@Request() req: any): Promise<Message[]> {
    const userId = req.user.id;
    return this.messagesService.findAll(userId);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Request() req: any,
  ): Promise<Message> {
    const userId = req.user.id;
    const message = await this.messagesService.findOne(id, userId);
    if (!message) {
      throw new NotFoundException('This message does not exist');
    }
    return message;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: any): Promise<void> {
    const userId = req.user.id;
    const message = await this.messagesService.findOne(id, userId);
    if (!message) {
      throw new NotFoundException('The message does not exist!');
    }
    if (message.user.id != userId) {
      throw new UnauthorizedException(
        'You are not authorized to delete this template',
      );
    }
    return this.messagesService.remove(id);
  }
}
