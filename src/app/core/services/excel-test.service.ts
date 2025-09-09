/**
 * https://medium.com/@theriyasharma24/make-excel-files-from-angular-33a531208e5e
 */
import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as XLSX from 'xlsx';
import * as fs from 'file-saver';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExcelTestService {

  constructor() {

  }

  async generateExcel() {


    // Excel Title, Header, Data
    const title = 'Yearly Easy Bus Booking For Betterment';
    const header = ['Year', 'Month', 'Facebook', 'Reddit', 'LinkedIn', 'Instagram'];
    const data = [
    [2019, 1, '50', '20', '25', '20'],
    [2019, 2, '80', '20', '25', '20'],
    [2019, 3, '120', '20', '25', '20'],  
    [2019, 4, '75', '20', '25', '20'],  
    [2019, 5, '60', '20', '25', '20'],  
    [2019, 6, '80', '20', '25', '20'],  
    [2019, 7, '95', '20', '25', '20'],  
    [2019, 8, '55', '20', '25', '20'],  
    [2019, 9, '45', '20', '25', '20'],  
    [2019, 10, '80', '20', '25', '20'],  
    [2019, 11, '90', '20', '25', '20'],  
    [2019, 12, '110', '20', '25', '20'],      
  ];

    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Booking Data');


// Add Row and formatting
    const titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'Corbel', family: 4, size: 16, underline: 'double', bold: true };
    worksheet.addRow([]);
    const subTitleRow = worksheet.addRow(['Date : 06-09-2020']);

    worksheet.mergeCells('A1:D2');


// Blank Row
    worksheet.addRow([]);

// Add Header Row
    const headerRow = worksheet.addRow(header);

// Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
  cell.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFFFFF00' },
    bgColor: { argb: 'FF0000FF' }
  };
  cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
});

// Add Data and Conditional Formatting
    data.forEach(d => {
  const row = worksheet.addRow(d);
  const qty = row.getCell(5);
  let color = 'FF99FF99';
  if (+(qty?.value || 0) < 500) {
    color = 'FF9999';
  }

  qty.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: color }
  };
}

);

    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 30;
    worksheet.addRow([]);


// Footer Row
    const footerRow = worksheet.addRow(['This is system generated excel sheet.']);
    footerRow.getCell(1).fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FFCCFFE5' }
};
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };

// Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);

// Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data: any) => {
  const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  fs.saveAs(blob, 'EasyBusBooking.xlsx');
});

  }

  readExcelFile(file: any,multipleSheets?:boolean,multipleColumns?:boolean): Observable<string | ArrayBuffer> {
    return new Observable(observer => {
    let workBook:any = null;
    //let jsonData:any = null;
    const reader = new FileReader();
    console.log('Imorted file', file);
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      const jsonData =multipleSheets?workBook.SheetNames.reduce((initial:any, name:any) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {}):XLSX.utils.sheet_to_json(workBook.Sheets[workBook.SheetNames[0]]);      
      console.log('excel data', jsonData); 
      if(multipleColumns)  
      observer.next(jsonData);
      else{
        const data=jsonData.reduce(
          (initial:Array<any>,obj:any) =>{
            const key=Object.keys(obj)[0];
            initial.push(obj[key]);
            return initial;
          },[]
        );
        observer.next(data);
      }
      observer.complete();  
    };
    reader.onloadend=() => {
      console.log('reading finished');  
      //return jsonData;
    }
    reader.onerror = (error) => {
        observer.error(error);
      };
    reader.readAsBinaryString(file); // Or readAsDataURL, readAsArrayBuffer, readAsBinaryString
     });
  }

}