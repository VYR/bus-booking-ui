import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { UdTableComponent } from '../../../../shared/components/ud-table/ud-table.component';
import { ITableColumns, ITableColumnType, ITableConfig } from '../../../../core/models/core.model';
import { PermissionsSandboxService } from '../../permissions-sandbox.service';
import { ToasterService } from '../../../../core/services/toaster.service';

@Component({
  selector: 'app-permissions-list',
  imports: [
    SharedModule,
    UdCardComponent,
    UdTableComponent
  ],
  templateUrl: './permissions-list.component.html',
  styleUrl: './permissions-list.component.css'
})
export class PermissionsListComponent implements OnInit{

  cardTypes=CARD_DESIGN_TYPES;
  cols:Array<ITableColumns>=[
    {
      uuid:'',
      key:'id',
      displayName:'ID',
      sticky:true
    },
    {
      uuid:'',
      key:'permissionName',
      displayName:'Permission Name',
      type:ITableColumnType.link
    },
    {
      uuid:'',
      key:'permissionUuid',
      displayName:'Permission UUID'
    },
    {
      uuid:'',
      key:'edit',
      displayName:'Edit',
      icon:'las la-edit',
      type:ITableColumnType.icon
    },
    {
      uuid:'',
      key:'delete',
      displayName:'Delete',
      icon:'las la-trash text-red-400!',
      type:ITableColumnType.icon
    }
  ];
  tableConfig:ITableConfig;
  permissions:Array<any>=[];
  sandbox: PermissionsSandboxService = inject(PermissionsSandboxService);
  toaster: ToasterService = inject(ToasterService);
  ngOnInit() {
    this.tableConfig={
          data:this.permissions,
          cols:this.cols,
          useDefaultFilter:false,
          exportExcel:true,
          selection:true,
          selectionStickey:true
          
        };
    this.getData();
     
  }
  getData(){
    this.sandbox.getAllPermissions().subscribe(
      (res:any) => {
        console.log(res);
        this.permissions=res?.list || [];
        console.log('permissions',this.permissions);
        this.tableConfig={...this.tableConfig,data:this.permissions};
      }
    );
  }
  onCellClick(row:any){
    console.log(row);
    if(row.key==='delete' && row?.data?.id){
      this.sandbox.deleteSinglePermission(row.data.id).subscribe(
        (res:any) => {
          this.toaster.showSuccess(row?.data?.permissionName+' '+res?.message);
          this.getData();
        }
      );
    }
    if(row.key === 'selectedForDelete' && row?.data){
      const ids=(row.data || []).map((e:any) => e?.id);
      console.log(ids);
      if(ids.length)
        this.sandbox.deleteBulkPermissions(ids).subscribe(
        (res:any) => {
          this.toaster.showSuccess(res?.message);
          this.getData();
        }
      );
    }
  }

}
