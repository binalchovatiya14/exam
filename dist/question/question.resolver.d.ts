import { QuestionService } from './question.service';
import { Question, QuestionType } from './entities/question.entity';
export declare class QuestionResolver {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getRandomQuestions(limit: number): Promise<Question[]>;
    getNextQuestion(): Promise<Question>;
    createQuestion(text: string, type: QuestionType, imageUrl?: string, options?: string[]): Promise<Question>;
}
