import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  static readonly backendBaseUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  fetchToken(): Observable<object> {
    return this.http.get(`${BaseService.backendBaseUrl}/token`, { observe: 'body', responseType: 'json' });
  }

  login(iuserId: string, ipassword: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${BaseService.backendBaseUrl}/auth`,
      { username: iuserId, password: ipassword },
      { observe: 'body', responseType: 'json' });
  }

  health(): Observable<object> {
    return this.http.get(`${BaseService.backendBaseUrl}/`, { observe: 'body', responseType: 'json' });
  }

  getdb(): Observable<object> {
    return this.http.get(`${BaseService.backendBaseUrl}/db/getu`, { observe: 'body', responseType: 'json' });
  }
}