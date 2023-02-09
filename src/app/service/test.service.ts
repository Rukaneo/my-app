import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, NextObserver } from 'rxjs';
import { UserModel } from '../models/users.module';
import { AnthonyResponse } from '../models/TestInterface';

@Injectable({
  providedIn: 'root'
})


export class TestService {

  constructor(private http: HttpClient) { 
    
  };
   REST_API_URL = 'http://localhost:3000/api/v1/users';

  getAllUsers():Observable<AnthonyResponse<any>>{
    return this.http.get<AnthonyResponse<any>>(this.REST_API_URL);
  }


  getAllUsers2():Observable<any>{
    return this.http.get<any>(this.REST_API_URL);
  }

  getUser(id: any):Observable<any>{
    return this.http.get<any>(`${this.REST_API_URL}/${id}`);
  }

  deleteUser(_id: any):Observable<any>{
    return this.http.delete(`${this.REST_API_URL}/${_id}`);
  }
  updateUser(user: any):Observable<any>{
    return this.http.patch(`${this.REST_API_URL}/${user._id}`, user);
  }
  
  createUser(user: any):Observable<any>{
    return this.http.post(this.REST_API_URL, user);
  }
}
