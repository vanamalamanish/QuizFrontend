export class Result {
  
    correctAnswers!:number;
    totalNoOfQuestions!:number;
    constructor(correctAnswers:number,totalNoOfQuestions:number){
        this.correctAnswers = correctAnswers;
        this.totalNoOfQuestions = totalNoOfQuestions;
    }
}
