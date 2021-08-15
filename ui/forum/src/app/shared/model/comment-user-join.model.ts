export class CommentUserJoin{
    constructor(
        public commentId: number,
        public description: string,
        public creationDate: Date,
        public questionId: number,
        public userId: number,
        public email: string,
        public username: string
    ){}
}