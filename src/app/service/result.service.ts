import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../responseModel';
import { Result } from '../result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  result!:Result;
  responseModel!:ResponseModel;
  url:string = 'http://localhost:8082/result';
  constructor(private http:HttpClient) { }
  setResult(correctAnswers:number,totalNoOfQuestions:number){
    this.result = new Result(correctAnswers,totalNoOfQuestions);
  }
  getResult(){
    return this.result;
  }
  getGrade(correctAnswers:number,totalNoOfQuestions:number):Observable<any>{
    console.log(totalNoOfQuestions);
    this.responseModel = new ResponseModel(correctAnswers,totalNoOfQuestions,localStorage.getItem('name')!);
    return this.http.post<any>(this.url,this.responseModel,{headers:{'Authorization':localStorage.getItem('token')!}});
  }
}
