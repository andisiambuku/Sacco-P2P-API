import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  Transaction,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';

@Entity()
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  assetName: string;

  @Column()
  sharePrice: number;

  @Column()
  shareQuantity: number;

  @ManyToOne(() => User, (user) => user.listings, { eager: true })
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.listing)
  transactions: Transaction[];
}
