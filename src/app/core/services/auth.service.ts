import { inject, Injectable } from '@angular/core';
import { ApplicationContextService } from '../../state/application-context.service';
import { CACHE_KEY_NAMES } from '../../shared/shared.enums';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private appContext:ApplicationContextService = inject(ApplicationContextService);
  private httpClient:HttpClient=inject(HttpClient);

  constructor() { }

  getToken(){
    return this.appContext.getSessionData(CACHE_KEY_NAMES.USER_CONFIG)?.user?.token;
  }
  login(){
    //https://api.restful-api.dev/objects
    //http://localhost:4200/mock-api/login.json
    return this.httpClient.get('https://api.restful-api.dev/objects').pipe(
      tap(
        (data:any) => {
            console.log(data);
            this.appContext.updateSessionData(CACHE_KEY_NAMES.USER_CONFIG,data);
        }
      )
    );
  }
}
