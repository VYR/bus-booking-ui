import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  from = '';
  to = '';
  date = '';
  buses: any[] = [];

  constructor(private http: HttpClient) {}

  search() {
    const url = `http://localhost:8080/api/buses/search?from=${this.from}&to=${this.to}&date=${this.date}`;
    this.http.get<any[]>(url).subscribe(data => this.buses = data);
  }
}
