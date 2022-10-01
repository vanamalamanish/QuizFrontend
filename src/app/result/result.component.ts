import { Component, OnInit } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  ans!:Result;
  constructor(private result:Result) { }

  ngOnInit(): void {
    this.ans.setCorrectAnswers(this.result.getCorrectAnswers());
    this.ans.setTotalNoOfQuestions(this.result.getTotalNoOfQuestions());
  }

}
