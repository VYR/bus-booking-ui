import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { EncryptDecryptService } from '../../shared/services/encrypt-decrypt.service';
import { environment } from '../../../environments/environment';
import { CONFIGURATION } from '../../shared/shared.constants';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private cryptoService: EncryptDecryptService = inject(EncryptDecryptService);
  private configSignalData =signal({});
  constructor(private http: HttpClient) { }

  loadConfig(){
    this.http.get('/config/env.json').subscribe(
      (res:any) => {
        console.log(res);
        if(res?.env)
        forkJoin([
                    this.http.get(
                      CONFIGURATION.USE_ENCRYPTION_FOR_CONFIG_SERVICE?CONFIGURATION.ENCRYPTED_CONFIG_PATH+res.env+'.json':CONFIGURATION.ORIGINAL_CONFIG_PATH+res.env+'.json'
                    ),
                    this.http.get(
                      CONFIGURATION.USE_ENCRYPTION_FOR_CONFIG_SERVICE?CONFIGURATION.ENCRYPTED_API_CONFIG_PATH:CONFIGURATION.ORIGINAL_API_CONFIG_PATH
                    ),
                ]).subscribe(
          ([basic,api]) => {
            const res1:any=basic;
            const res2:any=api;
            console.log(res1);
            console.log(res2);
            // console.log(environment.);
            const data={
              basic:CONFIGURATION.USE_ENCRYPTION_FOR_CONFIG_SERVICE?JSON.parse(this.cryptoService.decrypt(res1?.data)):res1,
              apiOperations:CONFIGURATION.USE_ENCRYPTION_FOR_CONFIG_SERVICE?JSON.parse(this.cryptoService.decrypt(res2?.data)):res2,
            };
            console.log(data);
            this.configSignalData.set(data);
          }
        );
      }
    );
  }

  getConfigSignalData():any{
    return this.configSignalData();
  }

  readJsonDepth(keysString:string,data:any){
    const keys:Array<string>=keysString.split('.');
    let value:any={};
    keys.forEach((key:string) => {
      value[key]=data[key];
    });
    return value;
  }
}
