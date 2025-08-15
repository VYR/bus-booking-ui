import { ConfigService } from '../core/services/config.service';
import { CACHE_KEYS } from '../shared/shared.constants';
import { CACHE_KEY_NAMES, CACHE_TYPES } from '../shared/shared.enums';
import { ICacheModal } from '../shared/shared.models';
import { CacheService } from './../shared/services/cache.service';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationContextService {

  private signalData =signal(null);
  cacheService:CacheService = inject(CacheService);
  configService:ConfigService = inject(ConfigService);

  constructor() { 
    
  }

  updateSignalData(data:any){
    this.signalData.set(data);
  }

  getSignalData(){
    return this.signalData();
  }

  getConfigSignalData(){
    return this.configService.getConfigSignalData();
  }

  getLocalData(key:CACHE_KEY_NAMES):ICacheModal{
    return this.cacheService.getCache(key,CACHE_TYPES.PERMANENT);
  }

  getSessionData(key:CACHE_KEY_NAMES):ICacheModal{
    return this.cacheService.getCache(key);
  }

  updateLocalData(key:CACHE_KEY_NAMES,data:ICacheModal){
    this.cacheService.setCache(key,data,CACHE_TYPES.PERMANENT);
  }

  updateSessionData(key:CACHE_KEY_NAMES,data:ICacheModal){
    this.cacheService.setCache(key,data);
  }
}
