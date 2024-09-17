import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
export declare class QuestionService {
    private questionRepository;
    private questionsPool;
    private currentQuestionIndex;
    constructor(questionRepository: Repository<Question>);
    create(question: Question): Promise<Question>;
    getRandomQuestions(limit: number): Promise<Question[]>;
    getNextQuestion(): Promise<Question>;
}
