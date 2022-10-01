import {HostListener, Directive,Input,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangebg]'
})
export class ChangebgDirective {

  @Input() isCorrect : Boolean=false ;
  constructor(private ref : ElementRef, private render:Renderer2) { }

  
  @HostListener('click') answer(){
    console.log(this.isCorrect);
    if(this.isCorrect){
      this.render.setStyle(this.ref.nativeElement,'background','green');
      this.render.setStyle(this.ref.nativeElement,'color','white');
      this.render.setStyle(this.ref.nativeElement,'border','2px solid grey');
    }
    else{
      this.render.setStyle(this.ref.nativeElement,'background','red');
      this.render.setStyle(this.ref.nativeElement,'color','white');
      this.render.setStyle(this.ref.nativeElement,'border','2px solid grey');
    }
  }

  @HostListener('after-tracked-click') changeColor(){
    this.render.setStyle(this.ref.nativeElement,'background','white');
      this.render.setStyle(this.ref.nativeElement,'color','black');
  }
}
