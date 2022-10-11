import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { ResultService } from '../service/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  name=localStorage.getItem('name');
  ans!:Result;
  noOfWrongAnswers:number=0;
  percentage!:number;
  grade!:any;
  constructor(private resultService:ResultService) { }

  ngOnInit(): void {
    this.ans = this.resultService.getResult();
    this.noOfWrongAnswers = this.ans.totalNoOfQuestions-this.ans.correctAnswers;
    this.percentage = (this.ans.correctAnswers/this.ans.totalNoOfQuestions)*100;
    this.resultService.getGrade(this.ans.correctAnswers,this.ans.totalNoOfQuestions).subscribe((data)=>{
      this.grade = data;
    });
  }

}
