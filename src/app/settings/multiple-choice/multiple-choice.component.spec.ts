import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceComponent } from './multiple-choice.component';
import { EditableDirective } from '../../util/directive/editable/editable.directive';
import { FormsModule } from '../../../../node_modules/@angular/forms';

describe('MultipleChoiceComponent', () => {
  let component: MultipleChoiceComponent;
  let fixture: ComponentFixture<MultipleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleChoiceComponent, EditableDirective],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
