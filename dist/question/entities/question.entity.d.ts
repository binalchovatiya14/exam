export declare enum QuestionType {
    MCQ = "MCQ",
    DESCRIPTIVE = "DESCRIPTIVE"
}
export declare class Question {
    id: number;
    text: string;
    type: QuestionType;
    imageUrl: string;
    options: string[];
}
