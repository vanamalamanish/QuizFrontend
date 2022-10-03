export class ResponseModel{
    noOfCorrectAnswers!:number;
    totalNoOfQuestions!:number;
    username!:String;
    constructor(noOfCorrectAnswers:number,totalNoOfQuestions:number,username:String){
        this.noOfCorrectAnswers = noOfCorrectAnswers;
        this.totalNoOfQuestions = totalNoOfQuestions;
        this.username = username;
    }
}