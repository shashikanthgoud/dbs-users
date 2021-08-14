import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../user/model/user.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: IUser) {
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.http.post(url, user, { headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }}).pipe(catchError(this.handleError.bind(this)));
  }

  updateUser(user: IUser) {
    const url = `https://jsonplaceholder.typicode.com/users/${user.id}`;
    return this.http.put(url, user, { headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }}).pipe(catchError(this.handleError.bind(this)));
  }

  getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url).pipe(catchError(this.handleError.bind(this)));
  }

  getUserById(id: number) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return this.http.get(url).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
    }
    return throwError(errorMessage);
  }
}
