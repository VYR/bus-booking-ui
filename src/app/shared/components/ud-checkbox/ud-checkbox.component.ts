import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ud-checkbox',
  imports: [],
  templateUrl: './ud-checkbox.component.html',
  styleUrl: './ud-checkbox.component.css'
})
export class UdCheckboxComponent {
  @Input() label:string='';
  @Input() checked:boolean=false;
  @Output() onChecked:EventEmitter<boolean>=new EventEmitter();
  getChangeEvent(event:any){
    console.log(event?.checked);
    this.onChecked.emit(event?.checked);
  }
}
