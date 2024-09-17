import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

export enum QuestionType {
  MCQ = 'MCQ',
  DESCRIPTIVE = 'DESCRIPTIVE',
}

registerEnumType(QuestionType, {
  name: 'QuestionType',
});

@ObjectType()
@Entity()
export class Question {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: true })
  text: string;

  @Field(() => QuestionType)
  @Column()
  type: QuestionType;

  @Field({ nullable: true })
  @Column({ nullable: true })
  imageUrl: string;

  @Field(() => [String])
  @Column('simple-array', { nullable: true })
  options: string[]; // For MCQ options
}
