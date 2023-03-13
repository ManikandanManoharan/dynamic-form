import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let clonedRequest: HttpRequest<any>;

        clonedRequest = request.clone({
            headers: request.headers.set('Author', 'Manikandan Manoharan'),
            url: request.url
        });

        return next.handle(clonedRequest).pipe(finalize(() => { }));
    }
}