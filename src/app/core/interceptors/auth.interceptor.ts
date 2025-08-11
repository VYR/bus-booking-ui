import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { catchError, finalize, throwError } from 'rxjs';
import { ToasterService } from '../services/toaster.service';
import { SpinnerService } from '../../shared/services/spinner.service';

    export const authInterceptor: HttpInterceptorFn = (req, next) => {
      const toasterService = inject(ToasterService);
      const spinnerService = inject(SpinnerService)
      const authService = inject(AuthService);
      spinnerService.show();
      const token = authService.getToken(); // Method to retrieve your auth token
      if (token) {
        // Clone the request and add the Authorization header
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
          spinnerService.hide();
          if (error.status === 401) {
            toasterService.showError('Unauthorized access. Please log in again.', 'Authentication Error');
            // Optionally, redirect to login page here
            // e.g., router.navigate(['/login']);
          } else if (error.status === 403) {
            toasterService.showError('Forbidden access. You do not have permission.', 'Authorization Error');
          }  else if (error.status === 404) {
            toasterService.showError('Not Found. You do not have permission.', 'Authorization Error');
          } else {
            toasterService.showError(`An error occurred: ${error.message}`, 'HTTP Error');
          }
          return throwError(() => error);
        }), finalize(() => {
        spinnerService.hide(); // Hide spinner on request completion (success or error)
      })
      );
    };
