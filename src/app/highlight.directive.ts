import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseover') over():void{
     this.renderer.addClass(this.element.nativeElement, 'increase');
     }
    @HostListener('mouseout') out(){
     this.renderer.removeClass(this.element.nativeElement, 'increase' );
    }
    
}
