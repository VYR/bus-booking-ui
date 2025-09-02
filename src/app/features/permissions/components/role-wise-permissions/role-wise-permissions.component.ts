import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { UdButtonComponent } from '../../../../shared/components/ud-button/ud-button.component';
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: 'app-role-wise-permissions',
  imports: [
    SharedModule,
    UdButtonComponent,
    MatSelectModule
  ],
  templateUrl: './role-wise-permissions.component.html',
  styleUrl: './role-wise-permissions.component.css'
})
export class RoleWisePermissionsComponent implements OnInit{
  
  form:UntypedFormGroup;
  persissions: string[] = ['Add User', 'Update User', 'Delete User', 'List Users', 'Add Vehicle', 'Update Vehicle'];
  roles: string[] = ['Super Admin', 'Admin','Customer',  'Employee', 'Driver', 'Vehicle Owner'];
  constructor(
    private fb:UntypedFormBuilder
  ){}

  ngOnInit(): void {
    this.form=this.fb.group({
      permission_ids :[null,[Validators.required]],
      role_id :[null,[Validators.required]]
    });
  }

  add(){
    const formData:any=this.form.value;
    console.log(formData);
  }

}

