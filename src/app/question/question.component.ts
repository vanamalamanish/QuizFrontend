import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Question } from '../question';
import { QuestionService } from '../service/question.service';
import { Result } from '../result';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  name: string = '';
  questionList: Question[] = [];
  currentQuestion: number = 0;
  points: number = 0;
  counter: number = 60;
  correctAnswer: number = 0;
  interval$: any;
  result!:Result;
  progress: String = '0';
  constructor(private questionService: QuestionService,private route:Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;

    this.getQuestions("prg");
    console.log(this.questionList);
    this.startCounter();
  }
  getQuestions(category: string) {
    this.questionService.getQuestions(category).subscribe(res => {
      console.log(res);
      this.questionList = res;
    })
  }

  nextQuestion() {
    console.log(this.questionList);
    this.currentQuestion++;
    this.resetCounter();
  }

  previousQuestion() {
    this.currentQuestion--;
    this.resetCounter();
  }


  answer(questionNO: number, option: any) {
    if (option === this.questionList[questionNO].answer) {
      this.points += 10;
      this.correctAnswer++;

    }
    setTimeout(() => {
      this.moveToNextQuestion();
      this.getProgressPercent();
      this.resetCounter();
    }, 1000);
  }

  moveToNextQuestion(){
    if(this.questionList.length===this.currentQuestion+1){
    this.result.setCorrectAnswers(this.correctAnswer);
    this.result.setTotalNoOfQuestions(this.questionList.length);
    this.route.navigate(['result']);
    }
    else 
    this.currentQuestion++;
  }

  checkoption(option: string, answer: string) {
    return option === answer;
  }
  startCounter() {

    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter == 0) {
        this.moveToNextQuestion();
        this.counter = 60;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {

    this.resetCounter();
    this.getQuestions("prg");
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = '0';
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;
  }
}
