// First level importation
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
// Second level importation
// Third level importation
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';


export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe( catchError( (error: HttpErrorResponse) => {

    let errorMessage = error.error.error;

    Swal.fire({
      title: errorMessage.mensaje,
      text: errorMessage.detalle,
      icon: 'error',
      confirmButtonText: 'Ok'
    })

    return throwError(() => errorMessage);

  }))

};
