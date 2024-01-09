import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHiglights]'
})
export class HiglightsDirective {
  @Input() appHiglights: string = '';


  @HostListener('mouseenter') onMouseEnter() {
    console.log('eeee')
    this.el.nativeElement.style.background = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.background = 'green';
  }
  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor = this.appHiglights

  }

}
