import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appEditable]'
})
export class EditableDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('focus') onFocus() {
    setTimeout(() => {
      this.el.nativeElement.select();
    }, 50);
  }

}