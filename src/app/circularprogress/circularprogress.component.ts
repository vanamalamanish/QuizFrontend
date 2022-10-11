import { Component, OnInit,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circularprogress',
  templateUrl: './circularprogress.component.html',
  styleUrls: ['./circularprogress.component.css']
})
export class CircularprogressComponent implements OnInit {

  @Input() progress!: number;
  @Input() grade!:string;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    setTimeout(()=>{
      let scrollProgress = document.getElementById('progress')!;
      scrollProgress.style.background = `conic-gradient(#008fff ${this.progress}%, #ffffff ${this.progress}%)`;
      let gradeElement = document.getElementById('grade')!;
      gradeElement.innerHTML = this.grade;
    },3000);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

}
