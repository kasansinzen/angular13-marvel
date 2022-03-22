import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import md5 from 'md5';

@Injectable()
export class MarvelKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloneRequest = request.clone({
      params: request.params
        .set("ts", 1)
        .set("apikey", environment.marvel_key.public)
        .set("hash", md5(`${1}${environment.marvel_key.private}${environment.marvel_key.public}`))
    });

    return next.handle(cloneRequest);
  }
}
