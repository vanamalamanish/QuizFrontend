export class Result {
  
    constructor(private correctAnswers:number,private totalNoOfQuestions:number){
    }


    public setCorrectAnswers(correctAnswer:number):void{
        this.correctAnswers = correctAnswer;
    }

    public getCorrectAnswers():number{
        return this.correctAnswers;
    }

    public setTotalNoOfQuestions(totalNoOfQuestions:number):void{
        this.totalNoOfQuestions = totalNoOfQuestions;
    }

    public getTotalNoOfQuestions():number{
        return this.totalNoOfQuestions;
    }
}
