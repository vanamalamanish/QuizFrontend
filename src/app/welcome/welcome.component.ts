import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  categories=[
    {category:"prg",value:"Programming Fundamentals"},
    {category:'c',value:"C"},
    {category:'java',value:"Java"},
    {category:"python",value:"Python"}];
  @ViewChild('name') name!:ElementRef;
  @ViewChild('select') selectedCategory!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem('name',this.name.nativeElement.value);
    console.log(this.selectedCategory.nativeElement.value);
  }

}
