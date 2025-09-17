import { Component, inject, OnInit } from '@angular/core';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { RouterModule } from '@angular/router';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { ROUTES } from '../../../../shared/shared.constants';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { JsonPipe } from '@angular/common';
import { AuthSandboxService } from '../../../../core/services/auth-sandbox.service';

@Component({
  selector: 'app-registration',
  imports: [
    RouterModule,
    UdCardComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    JsonPipe
],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  cardTypes=CARD_DESIGN_TYPES;
  routes=ROUTES;
  showCountryCodes:boolean=false;
  form!:UntypedFormGroup;
  sandbox: AuthSandboxService = inject(AuthSandboxService);
  constructor(private fb:UntypedFormBuilder){

  }

  ngOnInit(): void {
    this.form=this.fb.group({
      firstName:[null,[Validators.required,Validators.minLength(1), Validators.maxLength(50)]],
      lastName:[null,[Validators.required,Validators.minLength(1), Validators.maxLength(50)]],
      email:[null,[Validators.required, Validators.email,Validators.minLength(5), Validators.maxLength(100)]],
      mobile:[null,[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      npwd:[null,[Validators.required, Validators.minLength(3),Validators.maxLength(100)]],
      cpwd:[null,[Validators.required, this.passwordsMatchValidator()]],
    });
  }

  passwordsMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
       const password = this.form?.controls?.['npwd']; // Get the password control
      const confirmPassword = this.form?.controls?.['cpwd'];

      if (!password || !confirmPassword) {
        return null; // Controls not found, no validation needed
      }

      if (password.value !== confirmPassword.value) {
        // If passwords don't match, return an error object
        return { passwordsMismatch: true };
      }

      return null; // Passwords match, validation successful
    };
  }
  signup(){
    const formData:any=this.form.value;
    console.log(formData);
    const payload:any=[
      {
        "fullName": formData?.firstName+' '+formData.lastName,
        "email": formData?.email,
        "phoneNumber": formData?.mobile,
        "passwordHash": formData?.npwd
      }
    ];
    this.sandbox.signup(payload).subscribe(
      (res:any) => {
        if(res?.data){
          this.form.reset();
        }
      }
    );
  }
}
