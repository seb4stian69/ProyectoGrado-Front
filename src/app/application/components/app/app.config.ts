// First level importation
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
// Second level importation
import { routes } from './app.routes';
import { errorHandlerInterceptor } from '../../../core/interceptors/error-handler.interceptor';
// Third level importation


export const appConfig: ApplicationConfig = {

  providers: [
  
    provideRouter(routes),

    provideHttpClient(withInterceptors(
      [errorHandlerInterceptor]
    )),
  
  ]

};
