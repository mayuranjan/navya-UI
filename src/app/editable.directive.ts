import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEditable]',
  host: { "readonly":"true" }
})
export class EditableDirective {

  constructor(private el: ElementRef) { }

}