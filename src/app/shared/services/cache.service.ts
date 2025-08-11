import { EncryptDecryptService } from './encrypt-decrypt.service';
import { CACHE_TYPES } from '../shared.enums';
import { CACHE_KEYS } from './../shared.constants';
import { inject, Injectable } from '@angular/core';
import { ICacheKeys, ICacheModal } from '../shared.models';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  encryptDecryptService:EncryptDecryptService = inject(EncryptDecryptService);

  getCache(key:string,type:CACHE_TYPES=CACHE_TYPES.TEMPORARY){
    let data:string | null=type===CACHE_TYPES.TEMPORARY?sessionStorage.getItem(CACHE_KEYS[key]):localStorage.getItem((CACHE_KEYS[key]));
    return JSON.parse(data?this.encryptDecryptService.decrypt(data?data:''):'{}');
  }

  setCache(key:string,data:ICacheModal,type:CACHE_TYPES=CACHE_TYPES.TEMPORARY){
    let encData:string=this.encryptDecryptService.encrypt(JSON.stringify(data));
    if(type===CACHE_TYPES.TEMPORARY)
      sessionStorage.setItem(CACHE_KEYS[key], encData);
    else
      localStorage.getItem((CACHE_KEYS[key], encData))
  }
}
