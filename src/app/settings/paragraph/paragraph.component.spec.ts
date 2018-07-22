import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParagraphComponent } from './paragraph.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

describe('ParagraphComponent', () => {
  let component: ParagraphComponent;
  let fixture: ComponentFixture<ParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParagraphComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
