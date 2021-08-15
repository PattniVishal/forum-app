export class Comment {
    constructor(
        private description: string,
        private creationDate: Date,
        private questionId: number,
        private userId: number
    ) { }
}