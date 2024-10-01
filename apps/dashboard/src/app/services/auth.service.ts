import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User, usersList } from './user-list';

const STORAGE_KEY = 'userLogged';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userSubject: BehaviorSubject<any> = new BehaviorSubject(this.loadUserFromStorage());

  private loadUserFromStorage(): User | null {
    // récupération du user dans le storage
    const fromStorage = localStorage.getItem(STORAGE_KEY);
    // on retourne le résultat
    return fromStorage ? JSON.parse(fromStorage) as User : null;
  }

  authenticate(login: string, password: string): void {
    console.log('authenticate', login, password);
    // simulation d'un appel qui renvoit le user logéré
    of(usersList[0]).subscribe((user) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      this.userSubject.next(user);
    });
    location.reload();
  }

  logout() {
    // suppression du user du storage
    localStorage.removeItem(STORAGE_KEY);
    // update du subject
    this.userSubject.next(null);
    // redirection sur la page de login
    location.href = 'login';
  }

  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }
}
