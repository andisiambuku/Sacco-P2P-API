import { Injectable } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from './entities/listing.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ListingsService {
  constructor(
    @InjectRepository(Listing)
    private readonly listingRepository: Repository<Listing>,
  ) {}

  async create(
    createListingDto: CreateListingDto,
    userId: string,
  ): Promise<Listing> {
    const listing = this.listingRepository.create({
      ...createListingDto,
      user: { id: userId },
    });
    return this.listingRepository.save(listing);
  }

  findAll(userId: string): Promise<Listing[]> {
    return this.listingRepository.find({
      where: { user: { id: userId } },
    });
  }

  async findOneByName(assetName: string): Promise<Listing> {
    return this.listingRepository.findOne({ where: { assetName } });
  }

  async findOne(id: string, userId: string): Promise<Listing> {
    return this.listingRepository.findOne({
      where: { id, user: { id: userId } },
    });
  }

  async update(id: string, updateListingDto: UpdateListingDto, userId: string) {
    const listing = await this.findOne(id, userId);
    this.listingRepository.merge(listing, updateListingDto);
    return this.listingRepository.save(listing);
  }

  async remove(id: string): Promise<void> {
    await this.listingRepository.delete(id);
  }
}
