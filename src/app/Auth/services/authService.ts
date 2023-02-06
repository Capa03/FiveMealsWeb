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
    return this.http.post<any>('https://fivemealsapi.azurewebsites.net/User',user)
  }
  
  public login(user: User): Observable<any>{
    return this.http.post<any>('https://fivemealsapi.azurewebsites.net/User/Token',user)
  }

  public getProducts(): Observable<any>{
    return this.http.get<any>('https://fivemealsapi.azurewebsites.net/CategoryWithProducts/1')
  }

}
