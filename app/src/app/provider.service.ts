import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseUrl = 'http://localhost:5000/api';
  private usuarioUrl = '/user';
  private newsUrl = '/news';
  private loginUrl = '/login'

  constructor(private http:HttpClient) {
  }

  login(usuario: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + this.usuarioUrl + this.loginUrl , usuario);
  }

  signup(usuario: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + this.usuarioUrl , usuario);
  }

  getNews(params: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + this.newsUrl + '/' + JSON.stringify(params))
  }
}
