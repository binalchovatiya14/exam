"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const question_service_1 = require("./question.service");
const question_entity_1 = require("./entities/question.entity");
let QuestionResolver = class QuestionResolver {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async getRandomQuestions(limit) {
        return this.questionService.getRandomQuestions(limit);
    }
    async getNextQuestion() {
        return this.questionService.getNextQuestion();
    }
    async createQuestion(text, type, imageUrl, options) {
        const question = new question_entity_1.Question();
        question.text = text;
        question.type = type;
        question.imageUrl = imageUrl;
        question.options = options ? options : [];
        return this.questionService.create(question);
    }
};
exports.QuestionResolver = QuestionResolver;
__decorate([
    (0, graphql_1.Query)(() => [question_entity_1.Question]),
    __param(0, (0, graphql_1.Args)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionResolver.prototype, "getRandomQuestions", null);
__decorate([
    (0, graphql_1.Query)(() => question_entity_1.Question),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionResolver.prototype, "getNextQuestion", null);
__decorate([
    (0, graphql_1.Mutation)(() => question_entity_1.Question),
    __param(0, (0, graphql_1.Args)('text')),
    __param(1, (0, graphql_1.Args)('type')),
    __param(2, (0, graphql_1.Args)('imageUrl', { nullable: true })),
    __param(3, (0, graphql_1.Args)('options', { type: () => [String], nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Array]),
    __metadata("design:returntype", Promise)
], QuestionResolver.prototype, "createQuestion", null);
exports.QuestionResolver = QuestionResolver = __decorate([
    (0, graphql_1.Resolver)(() => question_entity_1.Question),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionResolver);
//# sourceMappingURL=question.resolver.js.map