import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  public register(user: User): Observable<any>{
    return this.http.post<any>('http://localhost:5011/User',user)
  }
  
  public login(user: User): Observable<any>{
    return this.http.post<any>('http://localhost:5011/User/Token',user)
  }

  public getProducts(): Observable<any>{
    return this.http.get<any>('http://localhost:5011/CategoryWithProducts/1')
  }
}
