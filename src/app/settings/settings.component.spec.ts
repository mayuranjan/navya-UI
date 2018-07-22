import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { QuestionComponent } from './question/question.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { EditableDirective } from '../util/directive/editable/editable.directive';
import { HttpModule } from '../../../node_modules/@angular/http';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { EndUserComponent } from '../end-user/end-user.component';
import { APP_BASE_HREF } from '../../../node_modules/@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/form/edit', pathMatch: 'full' },
  { path: 'form/edit', component: SettingsComponent },
  { path: 'form/edit/:id', component: SettingsComponent },
  { path: 'form/view/:id', component: EndUserComponent },
  { path: 'form/view/:id/:responseId', component: EndUserComponent }
];

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SettingsComponent,
        QuestionComponent,
        ButtonsComponent,
        ParagraphComponent,
        MultipleChoiceComponent,
        EditableDirective,
        EndUserComponent
      ],
      imports: [FormsModule, HttpModule, RouterModule.forRoot(routes)],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create in view mode', () => {
    expect(component.mode).toBe('create');
  });
});
