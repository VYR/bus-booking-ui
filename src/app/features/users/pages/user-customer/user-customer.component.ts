import { Component, OnInit } from '@angular/core';
import { ITableColumns, ITableColumnType, ITableConfig } from '../../../../core/models/core.model';
import { CARD_DESIGN_TYPES } from '../../../../shared/shared.enums';
import { SharedModule } from '../../../../shared/shared.module';
import { UdCardComponent } from '../../../../shared/components/ud-card/ud-card.component';
import { UdTableComponent } from '../../../../shared/components/ud-table/ud-table.component';

@Component({
  selector: 'app-user-customer',
  imports: [
    SharedModule,
  ],
  templateUrl: './user-customer.component.html',
  styleUrl: './user-customer.component.css'
})
export class UserCustomerComponent implements OnInit{

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
      displayName:'Customer Name',
      type:ITableColumnType.link
    },
    {
      uuid:'',
      key:'permission_uuid',
      displayName:'Customer Email'
    },
    {
      uuid:'',
      key:'permission_phone',
      displayName:'Customer Phone'
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
        permission_name:'Arjun Vemula',
        permission_uuid:'arjun@gmail.com',
        permission_phone:9976445324
      }
    ];
     this.tableConfig={
      data:this.permissions,
      cols:this.cols,
      useDefaultFilter:true
    }
  }

  onCellClick(row:any){
    console.log(row);
  }

}