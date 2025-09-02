import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UdCardComponent } from '../ud-card/ud-card.component';
import { CARD_DESIGN_TYPES } from '../../shared.enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ud-file-upload',
  imports: [
    CommonModule,
    UdCardComponent,     
  ],
  templateUrl: './ud-file-upload.component.html',
  styleUrl: './ud-file-upload.component.css'
})
export class UdFileUploadComponent {
  cardTypes=CARD_DESIGN_TYPES;
  @Input() isMultiple:boolean=false;
  @Input() leftPartClass:string='';
  @Input() rightPartClass:string='';
  @Input() singleUploadClass:string='';
  @Input() multipleUploadClass:string='';
  @Input() allowedFileTypes:string='';
  @Output() onFilesSelected:EventEmitter<any>=new EventEmitter();
  fileName:string='';
  errorMessage:string='';
  selectedFile!:any;
  onFileSelected(event:any){
    console.log(event?.files);
    if(!(event?.files || []).length) return;

    if(this.isMultiple){

    }
    else {
      this.selectedFile=event.files[0];
      const fileType = this.selectedFile.type; // Access the MIME type
      console.log('File Type:', fileType);

      // You can also get the file extension from the name
      this.fileName = this.selectedFile.name;
      const fileExtension = '.'+this.fileName.split('.').pop();
      console.log('File Extension:', fileExtension);
      if(this.allowedFileTypes.length && !this.allowedFileTypes.split(',').filter((e:any) => e.length).some((e:any) => e===fileExtension)){
        this.errorMessage='Only file types '+this.allowedFileTypes+' are allowed!';
        return;
      }
      else{
        this.errorMessage='';
        this.onFilesSelected.emit(this.selectedFile);
      }
    }
  }
  removeFile(){
    this.selectedFile=null;
    this.fileName=''
    this.errorMessage='';
  }
}
