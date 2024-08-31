import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CvFormComponent } from './cv-form/cv-form.component';
import { ResultA4Component } from './result-a4/result-a4.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NestedStepperComponent } from './nested-stepper/nested-stepper.component';
import { NestedStepperLanguageComponent } from './nested-stepper-language/nested-stepper-language.component';
import { NestedStepperExperienceComponent } from './nested-stepper-experience/nested-stepper-experience.component';
import { NestedStepperHardSkillComponent } from './nested-stepper-hard-skill/nested-stepper-hard-skill.component';
import { NestedStepperInterestComponent } from './nested-stepper-interest/nested-stepper-interest.component';
import { SolfaComponent } from './solfa/solfa.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditorComponent,
    CvFormComponent,
    ResultA4Component,
    NestedStepperComponent,
    NestedStepperLanguageComponent,
    NestedStepperExperienceComponent,
    NestedStepperHardSkillComponent,
    NestedStepperInterestComponent,
    SolfaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
