import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { SolfaComponent } from './solfa/solfa.component';
import { CvFormComponent } from './cv-form/cv-form.component';
import { ChatsComponent } from './whatsapp/component/chats/chats.component';
import { CallsComponent } from './whatsapp/component/calls/calls.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editor/:id', component: EditorComponent },
  {
    path: 'chat',
    component: ChatsComponent,
  },
  {
    path: 'call',
    component: CallsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
