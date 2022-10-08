import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface RequestData {
    headers?: { [key: string]: string };
    params?: { [key: string]: string };
    body?: any;
}
interface RequestOptions extends RequestData {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    endpoint: string;
}
@Injectable()
export class ApiService {
    constructor(private httpClient: HttpClient) {}

    private generateRequestOptions(options: RequestOptions) {
        const { headers, body, params } = options;
        return {
            headers: this.getHeaders(headers),
            body,
            params,
        };
    }

    private getHeaders(headers?: { [key: string]: any }) {
        if (headers)
            return {
                ...{ 'Content-Type': 'application/json' },
                ...headers,
            };
        else return {};
    }

    doRequest<T>(options: RequestOptions) {
        const url = `${environment.host}${environment.baseUrl}${options.endpoint}`;
        const requestOptions = this.generateRequestOptions(options);
        return this.httpClient.request<T>(options.method, url, requestOptions);
    }

    doGet = <T>(endpoint: string, params?: { [key: string]: any }) =>
        this.doRequest<T>({
            method: 'GET',
            endpoint,
            params,
        });

    doPost = <T>(endpoint: string, params?: { [key: string]: any }) =>
        this.httpClient.post<T>(`${environment.host}${environment.baseUrl}${endpoint}`, params);

    doPatch = <T>(endpoint: string, params?: { [key: string]: any }) =>
        this.httpClient.patch<T>(`${environment.host}${environment.baseUrl}${endpoint}`, params);

    doDelete = <T>(endpoint: string, params?: any) =>
        this.httpClient.delete<T>(`${environment.host}${environment.baseUrl}${endpoint}`, { body: params } as any);
}
