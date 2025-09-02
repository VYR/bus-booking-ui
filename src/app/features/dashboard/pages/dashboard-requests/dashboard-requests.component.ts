import { Component, OnInit } from '@angular/core';
import { UdTableComponent } from "../../../../shared/components/ud-table/ud-table.component";
import { ITableColumns, ITableColumnType, ITableConfig } from '../../../../core/models/core.model';
@Component({
  selector: 'app-dashboard-requests',
  imports: [
    UdTableComponent
],
  templateUrl: './dashboard-requests.component.html',
  styleUrl: './dashboard-requests.component.css'
})
export class DashboardRequestsComponent implements OnInit{
  users:any=[
    {
        "id": "1",
        "name": "Violet L.",
        "progress": "53",
        "fruit": "pomegranate"
    },
    {
        "id": "2",
        "name": "Charlotte T.",
        "progress": "73",
        "fruit": "pineapple"
    },
    {
        "id": "3",
        "name": "Amelia A.",
        "progress": "41",
        "fruit": "kiwi"
    },
    {
        "id": "4",
        "name": "Violet M.",
        "progress": "76",
        "fruit": "pomegranate"
    },
    {
        "id": "5",
        "name": "Amelia O.",
        "progress": "81",
        "fruit": "lychee"
    },
    {
        "id": "6",
        "name": "Mia C.",
        "progress": "44",
        "fruit": "lychee"
    },
    {
        "id": "7",
        "name": "Asher I.",
        "progress": "96",
        "fruit": "lime"
    },
    {
        "id": "8",
        "name": "Amelia M.",
        "progress": "10",
        "fruit": "kiwi"
    },
    {
        "id": "9",
        "name": "Thomas A.",
        "progress": "93",
        "fruit": "pomegranate"
    },
    {
        "id": "10",
        "name": "Elizabeth J.",
        "progress": "67",
        "fruit": "lime"
    },
    {
        "id": "11",
        "name": "Atticus C.",
        "progress": "21",
        "fruit": "pineapple"
    },
    {
        "id": "12",
        "name": "Isla I.",
        "progress": "24",
        "fruit": "pomegranate"
    },
    {
        "id": "13",
        "name": "Isabella O.",
        "progress": "63",
        "fruit": "lychee"
    },
    {
        "id": "14",
        "name": "Levi E.",
        "progress": "79",
        "fruit": "lime"
    },
    {
        "id": "15",
        "name": "Thomas I.",
        "progress": "28",
        "fruit": "peach"
    },
    {
        "id": "16",
        "name": "Jasper A.",
        "progress": "31",
        "fruit": "lime"
    },
    {
        "id": "17",
        "name": "Jasper M.",
        "progress": "56",
        "fruit": "mango"
    },
    {
        "id": "18",
        "name": "Isla T.",
        "progress": "20",
        "fruit": "peach"
    },
    {
        "id": "19",
        "name": "Arthur O.",
        "progress": "17",
        "fruit": "mango"
    },
    {
        "id": "20",
        "name": "Jack M.",
        "progress": "42",
        "fruit": "blueberry"
    },
    {
        "id": "21",
        "name": "Theodore O.",
        "progress": "83",
        "fruit": "mango"
    },
    {
        "id": "22",
        "name": "Elizabeth I.",
        "progress": "53",
        "fruit": "lime"
    },
    {
        "id": "23",
        "name": "Theodore J.",
        "progress": "33",
        "fruit": "lime"
    },
    {
        "id": "24",
        "name": "Violet T.",
        "progress": "7",
        "fruit": "lychee"
    },
    {
        "id": "25",
        "name": "Arthur A.",
        "progress": "21",
        "fruit": "mango"
    },
    {
        "id": "26",
        "name": "Violet J.",
        "progress": "30",
        "fruit": "pomegranate"
    },
    {
        "id": "27",
        "name": "Mia T.",
        "progress": "28",
        "fruit": "pomegranate"
    },
    {
        "id": "28",
        "name": "Olivia O.",
        "progress": "94",
        "fruit": "mango"
    },
    {
        "id": "29",
        "name": "Violet L.",
        "progress": "86",
        "fruit": "blueberry"
    },
    {
        "id": "30",
        "name": "Jack A.",
        "progress": "70",
        "fruit": "peach"
    },
    {
        "id": "31",
        "name": "Isla C.",
        "progress": "73",
        "fruit": "blueberry"
    },
    {
        "id": "32",
        "name": "Thomas C.",
        "progress": "74",
        "fruit": "pineapple"
    },
    {
        "id": "33",
        "name": "Isla C.",
        "progress": "78",
        "fruit": "pomegranate"
    },
    {
        "id": "34",
        "name": "Olivia A.",
        "progress": "42",
        "fruit": "pomegranate"
    },
    {
        "id": "35",
        "name": "Thomas M.",
        "progress": "84",
        "fruit": "kiwi"
    },
    {
        "id": "36",
        "name": "Mia O.",
        "progress": "76",
        "fruit": "lime"
    },
    {
        "id": "37",
        "name": "Theodore O.",
        "progress": "27",
        "fruit": "pomegranate"
    },
    {
        "id": "38",
        "name": "Charlotte A.",
        "progress": "51",
        "fruit": "kiwi"
    },
    {
        "id": "39",
        "name": "Olivia O.",
        "progress": "71",
        "fruit": "lime"
    },
    {
        "id": "40",
        "name": "Elizabeth M.",
        "progress": "10",
        "fruit": "pomegranate"
    },
    {
        "id": "41",
        "name": "Elizabeth C.",
        "progress": "47",
        "fruit": "peach"
    },
    {
        "id": "42",
        "name": "Elizabeth A.",
        "progress": "30",
        "fruit": "lychee"
    },
    {
        "id": "43",
        "name": "Charlotte I.",
        "progress": "77",
        "fruit": "blueberry"
    },
    {
        "id": "44",
        "name": "Amelia C.",
        "progress": "81",
        "fruit": "pomegranate"
    },
    {
        "id": "45",
        "name": "Asher C.",
        "progress": "22",
        "fruit": "pineapple"
    },
    {
        "id": "46",
        "name": "Theodore L.",
        "progress": "41",
        "fruit": "lime"
    },
    {
        "id": "47",
        "name": "Jack A.",
        "progress": "15",
        "fruit": "blueberry"
    },
    {
        "id": "48",
        "name": "Elizabeth T.",
        "progress": "41",
        "fruit": "lychee"
    },
    {
        "id": "49",
        "name": "Levi O.",
        "progress": "67",
        "fruit": "blueberry"
    },
    {
        "id": "50",
        "name": "Jasper T.",
        "progress": "79",
        "fruit": "lychee"
    },
    {
        "id": "51",
        "name": "Charlotte V.",
        "progress": "81",
        "fruit": "pineapple"
    },
    {
        "id": "52",
        "name": "Jack A.",
        "progress": "24",
        "fruit": "lychee"
    },
    {
        "id": "53",
        "name": "Asher O.",
        "progress": "95",
        "fruit": "peach"
    },
    {
        "id": "54",
        "name": "Olivia O.",
        "progress": "89",
        "fruit": "kiwi"
    },
    {
        "id": "55",
        "name": "Atticus J.",
        "progress": "96",
        "fruit": "pomegranate"
    },
    {
        "id": "56",
        "name": "Asher A.",
        "progress": "74",
        "fruit": "mango"
    },
    {
        "id": "57",
        "name": "Charlotte M.",
        "progress": "81",
        "fruit": "lychee"
    },
    {
        "id": "58",
        "name": "Thomas T.",
        "progress": "57",
        "fruit": "pineapple"
    },
    {
        "id": "59",
        "name": "Thomas T.",
        "progress": "93",
        "fruit": "lychee"
    },
    {
        "id": "60",
        "name": "Amelia T.",
        "progress": "35",
        "fruit": "blueberry"
    },
    {
        "id": "61",
        "name": "Violet A.",
        "progress": "51",
        "fruit": "lime"
    },
    {
        "id": "62",
        "name": "Maia A.",
        "progress": "98",
        "fruit": "peach"
    },
    {
        "id": "63",
        "name": "Asher A.",
        "progress": "20",
        "fruit": "kiwi"
    },
    {
        "id": "64",
        "name": "Isla L.",
        "progress": "86",
        "fruit": "lime"
    },
    {
        "id": "65",
        "name": "Thomas O.",
        "progress": "94",
        "fruit": "lime"
    },
    {
        "id": "66",
        "name": "Theodore T.",
        "progress": "75",
        "fruit": "lychee"
    },
    {
        "id": "67",
        "name": "Jasper A.",
        "progress": "53",
        "fruit": "kiwi"
    },
    {
        "id": "68",
        "name": "Cora C.",
        "progress": "51",
        "fruit": "mango"
    },
    {
        "id": "69",
        "name": "Oliver O.",
        "progress": "13",
        "fruit": "lime"
    },
    {
        "id": "70",
        "name": "Elizabeth E.",
        "progress": "62",
        "fruit": "mango"
    },
    {
        "id": "71",
        "name": "Cora T.",
        "progress": "69",
        "fruit": "lychee"
    },
    {
        "id": "72",
        "name": "Isla T.",
        "progress": "71",
        "fruit": "lychee"
    },
    {
        "id": "73",
        "name": "Maia O.",
        "progress": "43",
        "fruit": "lime"
    },
    {
        "id": "74",
        "name": "Elizabeth L.",
        "progress": "42",
        "fruit": "kiwi"
    },
    {
        "id": "75",
        "name": "Theodore C.",
        "progress": "48",
        "fruit": "mango"
    },
    {
        "id": "76",
        "name": "Mia A.",
        "progress": "78",
        "fruit": "lime"
    },
    {
        "id": "77",
        "name": "Oliver A.",
        "progress": "37",
        "fruit": "lime"
    },
    {
        "id": "78",
        "name": "Levi A.",
        "progress": "17",
        "fruit": "peach"
    },
    {
        "id": "79",
        "name": "Olivia E.",
        "progress": "23",
        "fruit": "kiwi"
    },
    {
        "id": "80",
        "name": "Charlotte M.",
        "progress": "97",
        "fruit": "peach"
    },
    {
        "id": "81",
        "name": "Elizabeth T.",
        "progress": "38",
        "fruit": "lime"
    },
    {
        "id": "82",
        "name": "Cora A.",
        "progress": "29",
        "fruit": "mango"
    },
    {
        "id": "83",
        "name": "Olivia O.",
        "progress": "45",
        "fruit": "mango"
    },
    {
        "id": "84",
        "name": "Isla T.",
        "progress": "79",
        "fruit": "peach"
    },
    {
        "id": "85",
        "name": "Charlotte A.",
        "progress": "58",
        "fruit": "mango"
    },
    {
        "id": "86",
        "name": "Violet J.",
        "progress": "46",
        "fruit": "kiwi"
    },
    {
        "id": "87",
        "name": "Thomas A.",
        "progress": "52",
        "fruit": "lychee"
    },
    {
        "id": "88",
        "name": "Asher A.",
        "progress": "45",
        "fruit": "peach"
    },
    {
        "id": "89",
        "name": "Jasper O.",
        "progress": "63",
        "fruit": "lime"
    },
    {
        "id": "90",
        "name": "Atticus A.",
        "progress": "30",
        "fruit": "blueberry"
    },
    {
        "id": "91",
        "name": "Jack I.",
        "progress": "27",
        "fruit": "kiwi"
    },
    {
        "id": "92",
        "name": "Arthur A.",
        "progress": "49",
        "fruit": "mango"
    },
    {
        "id": "93",
        "name": "Charlotte T.",
        "progress": "79",
        "fruit": "peach"
    },
    {
        "id": "94",
        "name": "Isla O.",
        "progress": "89",
        "fruit": "lime"
    },
    {
        "id": "95",
        "name": "Olivia C.",
        "progress": "12",
        "fruit": "mango"
    },
    {
        "id": "96",
        "name": "Olivia M.",
        "progress": "59",
        "fruit": "pomegranate"
    },
    {
        "id": "97",
        "name": "Maia M.",
        "progress": "33",
        "fruit": "pineapple"
    },
    {
        "id": "98",
        "name": "Mia T.",
        "progress": "17",
        "fruit": "lychee"
    },
    {
        "id": "99",
        "name": "Violet J.",
        "progress": "32",
        "fruit": "pineapple"
    },
    {
        "id": "100",
        "name": "Amelia I.",
        "progress": "22",
        "fruit": "pomegranate"
    }
];

  cols:Array<ITableColumns>=[
    {
      uuid:'',
      key:'id',
      displayName:'ID',
    },
    {
      uuid:'',
      key:'name',
      displayName:'Name',
      type:ITableColumnType.link
    },
    {
      uuid:'',
      key:'progress',
      displayName:'Progress'
    },
    {
      uuid:'',
      key:'fruit',
      displayName:'Fruit'
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

  constructor(){
   
  }

  ngOnInit() {
     this.tableConfig={
      data:this.users,
      cols:this.cols,
      useDefaultFilter:true
    }
  }

  onCellClick(row:any){
    console.log(row);
  }

}