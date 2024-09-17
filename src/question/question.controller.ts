import { Controller, Post, Body, Get } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './entities/question.entity';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async create(@Body() question: Question): Promise<Question> {
    return this.questionService.create(question);
  }
  /*Function to get all questions random*/
  @Post('/initialize')
  async initializeQuestions(@Body('limit') limit: number): Promise<Question[]> {
    return this.questionService.getRandomQuestions(limit);
  }
  /*Function to get question randomly from Database for online exam */

  @Get()
  async getNextQuestion(): Promise<Question> {
    return this.questionService.getNextQuestion();
  }
}
