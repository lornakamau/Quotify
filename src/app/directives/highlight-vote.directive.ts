import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightVote]'
})
export class HighlightVoteDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.text("rgb(93, 228, 255)")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.text("black")
  }

  private text(action:string){ 
    this.elem.nativeElement.style.color=action;
  }

}
