import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../question';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  url:string="http://localhost:8080/questions"
  constructor(private http:HttpClient) { }
  getQuestions(category:string):Observable<Question[]>{
    return this.http.get<Question[]>(this.url+"/"+category,{headers:{"Authorization":localStorage.getItem("token")!}});
  }
}
