import { Injectable } from '@angular/core';
import { User, usersList } from '../user-list/user-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  fetchUsers(): Observable<User[]> {
    return of(usersList);
  }
}
