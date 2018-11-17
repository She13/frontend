import { UserModel } from '../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  
  constructor(private http: HttpClient) { }

  public getUsers():Observable<UserModel[]> {
    return this.http.get<UserModel[]>("http://localhost:8080/getUsers");
  }
}
