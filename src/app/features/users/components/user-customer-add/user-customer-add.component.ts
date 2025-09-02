import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { UdButtonComponent } from '../../../../shared/components/ud-button/ud-button.component';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';

@Component({
  selector: 'app-user-customer-add',
  imports: [
    SharedModule,
    UdCardComponent,
    UdButtonComponent
  ],
  templateUrl: './user-customer-add.component.html',
  styleUrl: './user-customer-add.component.css'
})
export class UserCustomerAddComponent implements OnInit{
  cardTypes=CARD_DESIGN_TYPES;
  form:UntypedFormGroup;

  constructor(
    private fb:UntypedFormBuilder
  ){}

  ngOnInit(): void {
    this.form=this.fb.group({
      permission_uuid :[null,[Validators.required]],
      permission_name :[null,[Validators.required]]
    });
  }

  add(){
    const formData:any=this.form.value;
    console.log(formData);
  }

}