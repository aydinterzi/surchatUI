import { Directive,ElementRef,HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el:ElementRef,private renderer: Renderer2) { }
  @HostListener('keydown') keyDown(){
    window.alert('hover');
  }

}
