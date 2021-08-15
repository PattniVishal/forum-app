export class ResponseDTO {

    constructor(
        public message: string,
        public status: number,
        public data: any
    ) { }
}