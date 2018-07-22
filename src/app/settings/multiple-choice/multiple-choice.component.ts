import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { MultipleChoice } from '../settings.component';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnChanges {
  @Input() text: string;
  @Input() mode: string;
  @Input() isActiveQA: boolean;
  @Input() options: Array<MultipleChoice>;
  @Input() selectedOptionIndex: number;

  @Output() optionSet = new EventEmitter();
  @Output() updateSelectionOption = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    if (this.mode !== undefined) {
      switch (this.mode) {
        case 'create':
          break;
        case 'edit':
          break;
        case 'view':
          break;
        case 'response':
          break;
        default:
          break;
      }
    }

    if (this.options !== undefined && this.options.length === 0) {
      this.options.push(new MultipleChoice('Option 1'));
      this.options.push(new MultipleChoice());
    }
  }

  /**
   * removeOption
   */
  public removeOption(index: number) {
    this.options.splice(index, 1);

    this.optionSet.emit(this.options);
  }

  /**
   * onSelectionChange
   */
  public onSelectionChange(index: number) {
    this.updateSelectionOption.emit(index);
  }

  /**
   * addOption
   */
  public addOption(index: number) {
    if (this.mode === 'create' || this.mode === 'edit') {
      if (index === this.options.length - 1) {
        const label = 'Option ' + this.options.length;
        this.options.push(new MultipleChoice());
        if (this.options[index].optionLabel === 'Add option') {
          this.options[index].optionLabel = label;
        }
      }

      this.optionSet.emit(this.options);
    }
  }
}
