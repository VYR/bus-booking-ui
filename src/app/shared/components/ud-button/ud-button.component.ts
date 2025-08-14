import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ud-button',
  imports: [],
  templateUrl: './ud-button.component.html',
  styleUrl: './ud-button.component.css'
})
export class UdButtonComponent {
  @Input() disabled:boolean=false;
  @Input() label:string='Button';
  @Input() type:string='button';  
  @Input() class:string='mt-4 w-full';
  @Output() onButtonClick:EventEmitter<any>=new EventEmitter();





}
