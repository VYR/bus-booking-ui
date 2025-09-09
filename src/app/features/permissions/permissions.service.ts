import { inject, Injectable } from '@angular/core';
import { ServerInteractionService } from '../../core/services/server-interaction.service';
import { OPERATIONS } from '../../shared/operations';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {  

  private server:ServerInteractionService=inject(ServerInteractionService);

  constructor() { }

  getAllPermissions(){
    return this.server.processGetRequest(OPERATIONS.GET_ALL_PERMISSIONS);
  }

  addSinglePermission(params:any){
    return this.server.processPostRequest(OPERATIONS.ADD_SINGLE_PERMISSION,params);
  }
  
  addBulkPermissions(params:any){
    return this.server.processPostRequest(OPERATIONS.ADD_BULK_PERMISSIONS,params);
  }
  
  deleteSinglePermission(id:any){
    return this.server.processDeleteRequest(OPERATIONS.DELETE_SINGLE_PERMISSION,id.toString());
  }
  
  deleteBulkPermissions(params:any){
    return this.server.processDeleteRequest(OPERATIONS.DELETE_BULK_PERMISSIONS,'',params);
  }
}
