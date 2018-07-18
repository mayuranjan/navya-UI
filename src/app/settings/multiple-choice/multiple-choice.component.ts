import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnChanges {

  @Input() text: string;
  @Input() mode: string;

  public options: Array<Option> = new Array<Option>();

  constructor() {
    this.options.push(new Option('Option 1'));
    this.options.push(new Option());
  }

  ngOnChanges() {
    if (this.mode !== undefined) {
      switch (this.mode) {
        case 'view':

          break;
        case 'edit':

          break;
        default:
          break;
      }
    }
  }

  /**
   * removeOption
   * index: number   */
  public removeOption(index: number) {
    this.options.splice(index, 1);
  }

  /**
   * addOption
   * index: number   */
  public addOption(index: number) {
    if (index === (this.options.length - 1)) {
      const label = 'Option ' + this.options.length;
      this.options.push(new Option());
      this.options[index].label = label;
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
      this.label = 'Add option';
    }
  }
}
