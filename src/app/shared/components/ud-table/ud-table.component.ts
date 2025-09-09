import {AfterViewInit, Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModule } from '../../shared.module';
import { SelectionModel } from '@angular/cdk/collections';
import { ITableColumnType, ITableConfig } from '../../../core/models/core.model';
import { ExcelTestService } from '../../../core/services/excel-test.service';

@Component({
  selector: 'app-ud-table',
  imports: [
    SharedModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule
  ],
  templateUrl: './ud-table.component.html',
  styleUrl: './ud-table.component.css'
})
export class UdTableComponent   implements OnInit, AfterViewInit, OnChanges {
  excelService:ExcelTestService = inject(ExcelTestService);
  @Input() tableConfig:ITableConfig;
  @Output() onCellClick:EventEmitter<any>=new EventEmitter();
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<any>(true, []);
  filterValue:string='';
  columnTypes=ITableColumnType;
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.populateTableData();
  }

  ngOnInit(): void {    
    this.populateTableData();
  }
  multiselectEvent(action:string){
    this.onCellClick.emit({key:action,data:this.selection.selected});
  }
  populateTableData(){
    this.selection.clear();
    console.log(this.tableConfig.data);
    if(this.tableConfig.data.length>0){
      this.displayedColumns=this.tableConfig.cols.map((e:any) => e?.key);
    }  
    if(this.tableConfig.selection){
      this.displayedColumns.unshift('select'); 
    }

    this.dataSource = new MatTableDataSource(this.tableConfig?.data || []);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  exportExcel(){
    console.log(this.tableConfig.data);
    this.excelService.generateExcel();
  }
}
