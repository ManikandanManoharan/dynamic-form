import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap({
                error: err => this.handleError(err)
            })
        )
    }

    handleError(errorRes: HttpErrorResponse) {
        let errorObj = null;

        if (errorRes instanceof HttpErrorResponse) {
            let errMsg = '';

            switch (true) {
                case (errorRes.error instanceof Object && errorRes.error.message):
                    errMsg = `${errorRes.error.message}`;
                    break;
                case !!errorRes.message:
                    errMsg = `${errorRes.message}`;
                    break;
                default:
                    errMsg = 'HTTP status ${errorRes.status}: Unknown Error';
                    break;
            }

            errorObj = {
                success: false,
                message: errMsg,
                status: errorRes.status
            }
        } else {
            errorObj = errorRes;
        }

        return this.errorValidation(errorObj);
    }

    errorValidation(errObj: any) {
        let errMsg = '';
        switch (true) {
            case (errObj.status == 401):
                errMsg = "Unauthorized access...";
                break;
            case (errObj.status == 500):
                errMsg = "Technical failure. Please try after sometime..."
                break;
            default:
                errMsg = "Ohho, Connection failed..."
                break;
        }
        return window.alert(errMsg);
    }
}