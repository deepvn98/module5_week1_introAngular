import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class DirectiveDirective {

  constructor(private element: ElementRef, private render: Renderer2) {
    render.setStyle(element.nativeElement,'color','red');
    // render.setStyle(element.nativeElement,'background','blue');
   }

}
