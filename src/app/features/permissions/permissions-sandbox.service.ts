import { inject, Injectable } from '@angular/core';
import { PermissionsService } from './permissions.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsSandboxService {

  service:PermissionsService = inject(PermissionsService);
  
  constructor() { }

  getAllPermissions(){
    return this.service.getAllPermissions();
  }

  addSinglePermission(params:any){
    return this.service.addSinglePermission(params);
  }

  addBulkPermissions(params:any){
    return this.service.addBulkPermissions(params);
  }

  deleteSinglePermission(id:any){
    return this.service.deleteSinglePermission(id);
  }
  
  deleteBulkPermissions(params:any){
    return this.service.deleteBulkPermissions(params);
  }
}
