import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigModel, IAPIOperation } from '../models/core.model';

@Injectable({
  providedIn: 'root'
})
export class ServerInteractionService {

  private configService:ConfigService = inject(ConfigService);
  private configData:AppConfigModel;

  constructor(private http:HttpClient) {}

  processGetRequest(operation:string,headers:HttpHeaders=new HttpHeaders(),params:HttpParams=new HttpParams()){
    return this.http.get(this.prepareUrl(operation).url,{headers,params})
  }

  processPostRequest(operation:string,data:any,headers:HttpHeaders=new HttpHeaders(),params:HttpParams=new HttpParams()){
    const {url,apiOperation}=this.prepareUrl(operation);
    let body:any=data;
    if(apiOperation?.isFileUpload){
      const formData:any=new FormData();
      Object.keys(data).forEach(
        (key:any) => {
          formData.append(key.toString(),data[key])
        }
      );
      body=formData;
    }
    return this.http.post(url,body,{headers,params})
  }
  processPutRequest(operation:string,data:any,headers:HttpHeaders=new HttpHeaders(),params:HttpParams=new HttpParams()){
    const {url,apiOperation}=this.prepareUrl(operation);
    let body:any=data;
    if(apiOperation?.isFileUpload){
      const formData:any=new FormData();
      Object.keys(data).forEach(
        (key:any) => {
          formData.append(key.toString(),data[key])
        }
      );
      body=formData;
    }
    return this.http.put(url,body,{headers,params});
  }

  processDeleteRequest(operation:string,headers:HttpHeaders=new HttpHeaders(),params:HttpParams=new HttpParams()){ 
    return this.http.delete(this.prepareUrl(operation).url,{headers,params});
  }

  prepareUrl(operation:string){
    this.configData=this.configService.getConfigSignalData();
    const apiOperation:IAPIOperation=this.configData.apiOperations[operation];
    const url=this.configData.basic.api.url+(apiOperation.useMockApi?apiOperation.mockApiEndPoint:apiOperation.endpoint);
    return {url,apiOperation};
  }
  prepareHeaders(data:any):HttpHeaders{
    const headers=new HttpHeaders();
    Object.keys(data).forEach(
      (key:any) =>{
        headers.append(key,(data[key] || '').toString());
      }
    );
    return headers;
  }

  prepareParams(data:any):HttpParams{
    const headers=new HttpParams();
    Object.keys(data).forEach(
      (key:any) =>{
        headers.append(key,(data[key] || '').toString());
      }
    );
    return headers;
  }
}
