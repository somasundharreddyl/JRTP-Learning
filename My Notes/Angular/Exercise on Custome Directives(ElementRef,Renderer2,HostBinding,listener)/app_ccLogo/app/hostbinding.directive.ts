import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]',
  standalone: true
})
export class HostbindingDirective {

  constructor(private eleRef:ElementRef,
              private render:Renderer2) { }


@Input()  defaultColor:string='transparent';
 @Input() highlightcolor:string='red';
  @HostBinding('style.backgroundColor') bgColor=this.defaultColor;




  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.bgColor=this.defaultColor;

  }


  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.render.setStyle(this.elementRef.nativeElement,'background-color','cyan');
    this.bgColor=this.highlightcolor;

  }



}
