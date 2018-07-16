import { EditableDirective } from './editable.directive';
import { ElementRef, Renderer } from '@angular/core';

describe('EditableDirective', () => {
  it('should create an instance', () => {
    var el: ElementRef;
    var renderer: Renderer;
    const directive = new EditableDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});