import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  Request,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from './entities/listing.entity';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Post()
  async create(
    @Body() createlistingDto: CreateListingDto,
    @Request() req: any,
  ): Promise<Listing> {
    const userId = req.user.id;
    const listingWithTitle = await this.listingsService.findOneByName(
      createlistingDto.title,
    );
    if (listingWithTitle) {
      throw new BadRequestException(
        'listing with the same title already exists',
      );
    }
    return this.listingsService.create(createlistingDto, userId);
  }

  @Get()
  async findAll(@Request() req: any): Promise<Listing[]> {
    const userId = req.user.id;
    return this.listingsService.findAll(userId);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Request() req: any,
  ): Promise<Listing> {
    const userId = req.user.id;
    const listing = await this.listingsService.findOne(id, userId);
    if (!listing) {
      throw new NotFoundException('This listing does not exist');
    }
    return listing;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatelistingDto: UpdateListingDto,
    @Request() req: any,
  ): Promise<Listing> {
    const userId = req.user.id;
    const listing = await this.listingsService.findOne(id, userId);
    if (listing.user.id != userId) {
      throw new UnauthorizedException(
        'You are not authorized to update this template',
      );
    }
    return this.listingsService.update(id, updatelistingDto, userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req: any): Promise<void> {
    const userId = req.user.id;
    const listing = await this.listingsService.findOne(id, userId);
    if (!listing) {
      throw new NotFoundException('The listing does not exist!');
    }
    if (listing.user.id != userId) {
      throw new UnauthorizedException(
        'You are not authorized to delete this template',
      );
    }
    return this.listingsService.remove(id);
  }
}
