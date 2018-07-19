import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-multiple-choice",
  templateUrl: "./multiple-choice.component.html",
  styleUrls: ["./multiple-choice.component.css"]
})
export class MultipleChoiceComponent implements OnChanges {
  @Input() text: string;
  @Input() mode: string;
  @Input() isActiveQA: boolean;
  @Input() options: Array<Option>;

  @Output() optionSet = new EventEmitter();

  constructor() {}

  ngOnChanges() {
    if (this.mode !== undefined) {
      switch (this.mode) {
        case "create":
          break;
        case "edit":
          break;
        case "view":
          break;
        case "response":
          break;
        default:
          break;
      }
    }

    if (this.options !== undefined && this.options.length === 0) {
      this.options.push(new Option("Option 1"));
      this.options.push(new Option());
    }
  }

  /**
   * removeOption
   * index: number   */
  public removeOption(index: number) {
    this.options.splice(index, 1);

    this.optionSet.emit(this.options);
  }

  /**
   * addOption
   * index: number   */
  public addOption(index: number) {
    if (this.mode === 'create' || this.mode === 'edit') {
      if (index === this.options.length - 1) {
        const label = "Option " + this.options.length;
        this.options.push(new Option());
        if (this.options[index].label === "Add option") {
          this.options[index].label = label;
        }
      }

      this.optionSet.emit(this.options);
    }
  }
}

class Option {
  public label: string;
  public isSelected = false;

  constructor(label?: string) {
    if (label !== undefined) {
      this.label = label;
    } else {
      this.label = "Add option";
    }
  }
}
