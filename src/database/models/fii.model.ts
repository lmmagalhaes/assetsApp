import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Dates from './dates.model';
import { User } from './user.model';

@Entity()
export class FII extends Dates {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  acronym: string;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.fii, { cascade: true })
  user: User;
}
