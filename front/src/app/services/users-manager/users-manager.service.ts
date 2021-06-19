import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface User {
  name:string;
  last_name:string;
  phone_number:number;
  email_address:string;
  role:string;
}
interface GetUsersResponse{
  _embedded:{
    users: User[];
  }
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userUrl = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) {}

  //READ
  getAllUsers(): Observable<User[]> {
    return this.httpClient
      .get<GetUsersResponse>(this.userUrl).pipe(map(response=>response._embedded.users))
  }
  //UPDATE
  updateUser(data: any) {
    return this.httpClient.put(this.userUrl, data);
  }
  //DELETE
  deleteUser(data: any) {
    return this.httpClient.delete(this.userUrl + `/${data.id}`);
  }
}
