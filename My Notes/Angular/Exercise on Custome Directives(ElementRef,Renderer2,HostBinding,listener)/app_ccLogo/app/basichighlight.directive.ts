import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasichighlight]',
  standalone: true
})
export class BasichighlightDirective implements OnInit{

  constructor(private eleRef:ElementRef) { } //ElementRef eleRef=new ElementRef();

  ngOnInit(): void {
    
    this.eleRef.nativeElement.style.backgroundColor="cyan";
  }

}
