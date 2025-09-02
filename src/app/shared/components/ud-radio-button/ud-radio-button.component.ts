import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-ud-radio-button',
  imports: [
    MatRadioModule,
    FormsModule
  ],
  templateUrl: './ud-radio-button.component.html',
  styleUrl: './ud-radio-button.component.css'
})
export class UdRadioButtonComponent {
  @Input() radioValue:string='single';
  @Input() radioType:string='addData';
  @Input() radioOptions:Array<any>=[];
  
  @Output() onRadioSelectionChange:EventEmitter<any>=new EventEmitter();
}
