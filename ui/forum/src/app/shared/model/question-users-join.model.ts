export class QuestionsUsersJoin{

    constructor(
        public questionId: number,
        public title: string,
        public description: string,
        public creationDate: Date,
        public userId: number,
        public email: string,
        public username: string
    ){}
}