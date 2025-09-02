import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularLineawesomeModule, LaIconLibrary } from "angular-line-awesome";
import { lasHippo, lasHeart, labAngular } from 'angular-line-awesome/icons';
import { DirectivesModule } from './directives/directives.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    DirectivesModule,
    AngularLineawesomeModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    DirectivesModule,
    AngularLineawesomeModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SharedModule {
  constructor(library: LaIconLibrary){
    library.addIcons([lasHippo, lasHeart, labAngular]);
  }
}

