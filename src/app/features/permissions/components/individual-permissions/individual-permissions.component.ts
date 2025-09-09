import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { UdButtonComponent } from '../../../../shared/components/ud-button/ud-button.component';
import { UdRadioButtonComponent } from "../../../../shared/components/ud-radio-button/ud-radio-button.component";
import { UdFileUploadComponent } from '../../../../shared/components/ud-file-upload/ud-file-upload.component';
import { ExcelTestService } from '../../../../core/services/excel-test.service';
import { PermissionsSandboxService } from '../../permissions-sandbox.service';
import { ToasterService } from '../../../../core/services/toaster.service';
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
  selectedFile:any;
  sandbox:PermissionsSandboxService = inject(PermissionsSandboxService);
  toaster:ToasterService = inject(ToasterService);
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
    const payload={
      permissionName:formData?.permission_name
    };
    this.sandbox.addSinglePermission(payload).subscribe(
      (res:any) => {
        if(res?.data){
          this.toaster.showSuccess(res?.message);
          this.form.reset();
        }
      }
    );
  }

  onChange(value:any){
    console.log(value);
    this.addType=value;
  }

  onFileSelected(file:any){
    this.selectedFile=file;
  }
  addBulk(){
    const file=this.selectedFile;
    console.log(file);
    this.excelService.readExcelFile(file).subscribe(
      (data:any) => {
        console.log(data);
        if(data){
          const payload=(data || []).map((e:any) => {return {permissionName:e};});
          this.sandbox.addBulkPermissions(payload).subscribe(
            (res:any) => {
              if(res?.list){
                this.toaster.showSuccess(res?.message);
                this.selectedFile=null;
              }
            }
          );
        }
      }
    );
   
  }
}
