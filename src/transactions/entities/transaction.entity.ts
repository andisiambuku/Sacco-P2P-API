import { BaseEntity, PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  buyerId: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Listing, (listing) => listing.tranactions, { eager: true })
  listing: Listing;
}
