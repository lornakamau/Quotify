import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightVote]'
})
export class HighlightVoteDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.text("rgba(9,9,121,1)")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.text("black")
  }

  private text(action:string){ 
    this.elem.nativeElement.style.color=action;
  }

}
