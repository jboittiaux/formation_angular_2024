import { Injectable } from '@angular/core';
import { User, usersList } from './user-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  fetchUsers(): Observable<User[]> {
    return of(usersList);
  }

  fetchUser(id: number): Observable<User | null> {
    const user = usersList.find((user) => user.id == id);
    return of(user ? user : null);
  }
}
