import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[appEditable]',
  host: { "readonly": "true" }
})
export class EditableDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.readOnly = false;
    // this.el.nativeElement.focus();
    this.renderer.setElementStyle(this.el.nativeElement, 'user-select', 'all');
    this.renderer.setElementStyle(this.el.nativeElement, '-webkit-user-select', 'all');
  }

}