import { QuestionService } from './question.service';
import { Question } from './entities/question.entity';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    create(question: Question): Promise<Question>;
    initializeQuestions(limit: number): Promise<Question[]>;
    getNextQuestion(): Promise<Question>;
}
