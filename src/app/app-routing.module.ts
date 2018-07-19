import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { EndUserComponent } from './end-user/end-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/form/edit', pathMatch: 'full' },
  { path: 'form/edit', component: SettingsComponent },
  { path: 'form/edit/:id', component: SettingsComponent },
  { path: 'form/view/:id', component: EndUserComponent },
  { path: 'form/view/:id/:responseId', component: EndUserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
