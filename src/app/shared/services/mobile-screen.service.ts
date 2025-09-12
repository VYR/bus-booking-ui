import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMobileScreen } from '../shared.models';

@Injectable({
  providedIn: 'root'
})
export class MobileScreenService {
  mobileScreen:Observable<IMobileScreen>;
  mobileScreenSubject:BehaviorSubject<IMobileScreen> = new BehaviorSubject(new IMobileScreen());

  constructor() { 
    this.mobileScreen=this.mobileScreenSubject.asObservable();
  }

  setMobileScreenData(data:any):any{
    return this.mobileScreenSubject.next(data);
  }

  getMobileScreenData():IMobileScreen{
    return this.mobileScreenSubject.value;
  }
}

