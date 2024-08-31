import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { SolfaComponent } from './solfa/solfa.component';
import { CvFormComponent } from './cv-form/cv-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editor/:id', component: EditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
