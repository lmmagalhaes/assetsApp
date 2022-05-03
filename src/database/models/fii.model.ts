import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Dates from './dates.model';
import { User } from './user.model';

@ObjectType()
@Entity()
export class FII extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  acronym: string;

  @Field()
  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.fii)
  user: User;
}
