import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://reqres.in/api/users';

  private _http = inject(HttpClient);


  getUserById(id: number): Observable<User>{

    return this._http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
    .pipe(
      map(resp => resp.data),
      tap(console.log),
      );
  }



}
