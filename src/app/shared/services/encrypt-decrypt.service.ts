import { Injectable } from '@angular/core';
import * as CryptoTS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  key: string = "z!!!!!!!1sdfadsf56adf456asdfasdf";

  constructor() { }
   encrypt (data:string) {
    return CryptoTS.AES.encrypt(data,  this.key).toString();
  }

  decrypt (data:string) {
    return CryptoTS.AES.decrypt(data, this.key).toString(CryptoTS.enc.Utf8);
  }

}
