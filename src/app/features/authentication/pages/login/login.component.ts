import { Component, inject, OnInit } from '@angular/core';
import { UdCardComponent } from "../../../../shared/components/ud-card/ud-card.component";
import { CACHE_KEY_NAMES, CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { ROUTES } from '../../../../shared/shared.constants';
import { AuthService } from '../../../../core/services/auth.service';
import { ApplicationContextService } from '../../../../state/application-context.service';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { SharedModule } from '../../../../shared/shared.module';
import { UdInputComponent } from "../../../../shared/components/ud-input/ud-input.component";
import { UdCheckboxComponent } from "../../../../shared/components/ud-checkbox/ud-checkbox.component";
import { UdButtonComponent } from "../../../../shared/components/ud-button/ud-button.component";
import { Router } from '@angular/router';
import { AuthSandboxService } from '../../../../core/services/auth-sandbox.service';

@Component({
  selector: 'app-login',
  imports: [
    SharedModule,
    UdCardComponent,
    UdInputComponent,
    UdCheckboxComponent,
    UdButtonComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  cardTypes=CARD_DESIGN_TYPES;
  routes=ROUTES;
  sandbox:AuthSandboxService=inject(AuthSandboxService);
  appContext:ApplicationContextService=inject(ApplicationContextService);
  form!:UntypedFormGroup;
  constructor(
    private formBuilder:UntypedFormBuilder,
    private router:Router
  ){}
  ngOnInit(): void {
    console.log(this.appContext.getSessionData(CACHE_KEY_NAMES.USER_CONFIG));
    this.form=this.formBuilder.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]
    });
  }
  onChange(value:boolean){
    console.log(value);
  }
  login(){
    const formData:any=this.form.value;
    console.log(formData);
    this.sandbox.login().subscribe();
    this.router.navigate([ROUTES.SUPER_ADMIN_DASHBOARD]);
  }
  get email(){
    return this.form.get('email') as UntypedFormControl;
  }
  get password(){
    return this.form.get('password') as UntypedFormControl;
  }
}
