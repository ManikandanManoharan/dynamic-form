import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonFormData } from '../dynamic-fields/dynamic-fields.component';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private httpClient: HttpClient) { }
    
    public getDynamicFormJson(): Observable<JsonFormData> {
        const url = '../assets/my-form.json';
        return this.httpClient.get<JsonFormData>(url);
    }

    postUserData(data): Observable<any> {
        const url = '/user/save';
        return this.httpClient.post(url, data);
    }
}