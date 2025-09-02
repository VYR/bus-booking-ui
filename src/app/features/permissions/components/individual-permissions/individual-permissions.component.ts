import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { UdButtonComponent } from '../../../../shared/components/ud-button/ud-button.component';
import { UdRadioButtonComponent } from "../../../../shared/components/ud-radio-button/ud-radio-button.component";
import { UdFileUploadComponent } from '../../../../shared/components/ud-file-upload/ud-file-upload.component';
import { ExcelTestService } from '../../../../core/services/excel-test.service';
@Component({
  selector: 'app-individual-permissions',
  imports: [
    SharedModule,
    UdButtonComponent,
    UdRadioButtonComponent,
    UdFileUploadComponent
],
  templateUrl: './individual-permissions.component.html',
  styleUrl: './individual-permissions.component.css'
})
export class IndividualPermissionsComponent implements OnInit{
  addType:string='single';
  form:UntypedFormGroup;
  excelService:ExcelTestService = inject(ExcelTestService);
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
  onChange(value:any){
    console.log(value);
    this.addType=value;
  }
  onFileSelected(file:any){
    console.log(file);
    const data=this.excelService.readExcelFile(file);
    console.log(data);
  }
}
