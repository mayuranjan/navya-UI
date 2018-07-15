import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { EndUserComponent } from './end-user/end-user.component';
import { MultipleChoiceComponent } from './settings/multiple-choice/multiple-choice.component';
import { ParagraphComponent } from './settings/paragraph/paragraph.component';
import { QuestionComponent } from './settings/question/question.component';
import { EditableDirective } from './editable.directive';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    EndUserComponent,
    MultipleChoiceComponent,
    ParagraphComponent,
    QuestionComponent,
    EditableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
