import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostlistener]',
  standalone: true
})
export class HostlistenerDirective {

  constructor(private elementRef:ElementRef,
              private render:Renderer2 ) { }


    @HostListener('mouseenter') mouseover(eventData:Event){
      this.render.setStyle(this.elementRef.nativeElement,'background-color','blue');

    }


    @HostListener('mouseleave') mouseleave(eventData:Event){
      this.render.setStyle(this.elementRef.nativeElement,'background-color','cyan');

    }

}
