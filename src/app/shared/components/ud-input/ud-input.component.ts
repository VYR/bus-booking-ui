import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { UdInputLabelComponent } from "../ud-input-label/ud-input-label.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ud-input',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UdInputLabelComponent
],
  templateUrl: './ud-input.component.html',
  styleUrl: './ud-input.component.css'
})
export class UdInputComponent {

  @Input() required:boolean=false;
  @Input() withLabel:boolean=true;
  @Input() controlName!:UntypedFormControl;
  @Input() formGroup!:UntypedFormGroup;
  @Input() pattern!:string;
  @Input() placeholder:string='';
  @Input() class:string='';
  @Input() type:string='text';
  //for label
  @Input() labelName:string='';
@Input() labelClass:string='';
@Input() labelRequiredClass:string='';

}
