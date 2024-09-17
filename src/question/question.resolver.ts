import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { QuestionService } from './question.service';
import { Question, QuestionType } from './entities/question.entity';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Query(() => [Question])
  async getRandomQuestions(@Args('limit') limit: number): Promise<Question[]> {
    return this.questionService.getRandomQuestions(limit);
  }

  @Query(() => Question)
  async getNextQuestion(): Promise<Question> {
    return this.questionService.getNextQuestion();
  }

  @Mutation(() => Question)
  async createQuestion(
    @Args('text') text: string,
    @Args('type') type: QuestionType,
    @Args('imageUrl', { nullable: true }) imageUrl?: string,
    @Args('options', { type: () => [String], nullable: true })
    options?: string[],
  ): Promise<Question> {
    const question = new Question();
    question.text = text;
    question.type = type;
    question.imageUrl = imageUrl;
    question.options = options ? options : [];
    return this.questionService.create(question);
  }
}
