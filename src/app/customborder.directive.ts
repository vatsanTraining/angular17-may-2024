import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomborder]',
  standalone: true
})
export class CustomborderDirective {

  @Input('appCustomborder') className:string =''
  constructor(private element:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){

    this.renderer.addClass(this.element,this.className)
  }
}
