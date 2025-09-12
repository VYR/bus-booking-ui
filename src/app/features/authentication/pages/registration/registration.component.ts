import { Component, OnInit } from '@angular/core';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { RouterModule } from '@angular/router';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { ROUTES } from '../../../../shared/shared.constants';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-registration',
  imports: [
    RouterModule,
    UdCardComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  cardTypes=CARD_DESIGN_TYPES;
  routes=ROUTES;
  showCountryCodes:boolean=false;
  form!:UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder){

  }

  ngOnInit(): void {
    this.form=this.fb.group({
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      email:[null,[Validators.required]],
      mobile:[null,[Validators.required]],
      // password:[null,[Validators.required]],
    });
  }

}
