import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ApplicationContextService } from '../../state/application-context.service';
import { CACHE_KEY_NAMES } from '../../shared/shared.enums';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSandboxService {

  authService:AuthService = inject(AuthService);  
  private appContext:ApplicationContextService = inject(ApplicationContextService);

  constructor() { }

  getToken(){
    return this.appContext.getSessionData(CACHE_KEY_NAMES.USER_CONFIG)?.user?.token;
  }

    login(){
    return this.authService.login().pipe(
      tap(
        (data:any) => {
            console.log(data);
            this.appContext.updateSessionData(CACHE_KEY_NAMES.USER_CONFIG,data);
        }
      )
    );
  }

}
