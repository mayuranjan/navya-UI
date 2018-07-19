import {
  Directive,
  ElementRef,
  HostListener,
  Renderer,
  Input
} from "@angular/core";

@Directive({
  selector: "[appEditable]"
})
export class EditableDirective {
  @Input("appEditable") mode;

  constructor(private el: ElementRef, private renderer: Renderer) {}

  @HostListener("focus")
  onFocus() {
    if (this.mode === "create" || this.mode === "edit") {
      setTimeout(() => {
        this.el.nativeElement.select();
      }, 50);
    }
  }
}
