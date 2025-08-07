import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardApiService {
  constructor(private http: HttpClient) {}

  getDashboardStats(): Observable<any> {
    return this.http.get('https://api.restful-api.dev/objects'); // replace with real API
  }
}
