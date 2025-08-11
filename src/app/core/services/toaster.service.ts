import { inject, Injectable } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private toastService:HotToastService=inject(HotToastService);
  private toastr:ToastrService=inject(ToastrService);
  constructor() { }

   showSuccess(message: string, title?: string) {
    this.toastService.success(message);
    //this.toastr.success(message, title);
  }

  showError(message: string, title?: string) {
    console.log("showError ");
    //this.toastr.error(message, title);
    this.toastService.error(message);
  }

  showWarning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }

  showInfo(message: string, title?: string) {
    this.toastr.info(message, title);
  }
}
