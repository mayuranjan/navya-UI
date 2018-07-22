import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { EndUserComponent } from './end-user/end-user.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HttpModule } from '../../node_modules/@angular/http';
import { QuestionComponent } from './settings/question/question.component';
import { ParagraphComponent } from './settings/paragraph/paragraph.component';
import { MultipleChoiceComponent } from './settings/multiple-choice/multiple-choice.component';
import { EditableDirective } from './util/directive/editable/editable.directive';
import { ButtonsComponent } from './settings/buttons/buttons.component';
import { APP_BASE_HREF } from '../../node_modules/@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/form/edit', pathMatch: 'full' },
  { path: 'form/edit', component: SettingsComponent },
  { path: 'form/edit/:id', component: SettingsComponent },
  { path: 'form/view/:id', component: EndUserComponent },
  { path: 'form/view/:id/:responseId', component: EndUserComponent }
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EndUserComponent,
        QuestionComponent,
        ParagraphComponent,
        MultipleChoiceComponent,
        SettingsComponent,
        EditableDirective,
        ButtonsComponent,
        AppComponent
      ],
      imports: [FormsModule, HttpModule, RouterModule.forRoot(routes)],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Navya Care');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Navya Care!');
  }));
});
