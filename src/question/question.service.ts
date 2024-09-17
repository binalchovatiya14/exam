import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  private questionsPool: Question[] = [];
  private currentQuestionIndex: number = 0;
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(question: Question): Promise<Question> {
    return this.questionRepository.save(question);
  }

  async getRandomQuestions(limit: number): Promise<Question[]> {
    const allQuestions = await this.questionRepository.find();
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    this.questionsPool = shuffled.slice(0, limit);
    this.currentQuestionIndex = 0; // Reset index for new set of questions
    return this.questionsPool;
  }

  async getNextQuestion(): Promise<Question> {
    if (this.currentQuestionIndex < this.questionsPool.length) {
      return this.questionsPool[this.currentQuestionIndex++];
    } else {
      throw new NotFoundException('No more questions available.');
    }
  }
}
