import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ud-input-label',
  imports: [],
  templateUrl: './ud-input-label.component.html',
  styleUrl: './ud-input-label.component.css'
})
export class UdInputLabelComponent {
@Input() name:string='';
@Input() class:string='';
@Input() requiredClass:string='';
@Input() required:boolean=false;

}
