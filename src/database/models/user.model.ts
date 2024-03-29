import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Dates from './dates.model';
import { FII } from './fii.model';

@ObjectType()
@Entity()
export class User extends Dates {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  // TODO: Verify if have null values on a database
  @Column({ unique: true, nullable: true })
  email: string;

  @Column('text')
  password: string;

  @OneToMany(() => FII, (fii) => fii.userIdId)
  fii: FII[];
}
