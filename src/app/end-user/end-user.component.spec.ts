import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EndUserComponent } from './end-user.component';
import { SettingsComponent } from '../settings/settings.component';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { QuestionComponent } from '../settings/question/question.component';
import { ParagraphComponent } from '../settings/paragraph/paragraph.component';
import { MultipleChoiceComponent } from '../settings/multiple-choice/multiple-choice.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { HttpModule } from '../../../node_modules/@angular/http';
import { APP_BASE_HREF } from '../../../node_modules/@angular/common';
import { EditableDirective } from '../util/directive/editable/editable.directive';
import { ButtonsComponent } from '../settings/buttons/buttons.component';

const routes: Routes = [
  { path: '', redirectTo: '/form/edit', pathMatch: 'full' },
  { path: 'form/edit', component: SettingsComponent },
  { path: 'form/edit/:id', component: SettingsComponent },
  { path: 'form/view/:id', component: EndUserComponent },
  { path: 'form/view/:id/:responseId', component: EndUserComponent }
];

describe('EndUserComponent', () => {
  let component: EndUserComponent;
  let fixture: ComponentFixture<EndUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EndUserComponent,
        QuestionComponent,
        ParagraphComponent,
        MultipleChoiceComponent,
        SettingsComponent,
        EditableDirective,
        ButtonsComponent
      ],
      imports: [FormsModule, HttpModule, RouterModule.forRoot(routes)],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
