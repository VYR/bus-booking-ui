import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { UdTableComponent } from '../../../../shared/components/ud-table/ud-table.component';
import { ITableColumns, ITableColumnType, ITableConfig } from '../../../../core/models/core.model';

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
      key:'permission_id',
      displayName:'ID',
    },
    {
      uuid:'',
      key:'permission_name',
      displayName:'Permission Name',
      type:ITableColumnType.link
    },
    {
      uuid:'',
      key:'permission_uuid',
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
  
  ngOnInit() {
    this.permissions=[
      {
        permission_id:25242,
        permission_name:'Add Users',
        permission_uuid:'ADD_USERS'
      }
    ];
     this.tableConfig={
      data:this.permissions,
      cols:this.cols,
      useDefaultFilter:true,
      exportExcel:true
    }
  }

  onCellClick(row:any){
    console.log(row);
  }

}
