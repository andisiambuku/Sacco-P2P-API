import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
  Column,
  ManyToMany,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @ManyToMany(() => User, (user) => user.messages, { eager: true })
  user: User;
}
