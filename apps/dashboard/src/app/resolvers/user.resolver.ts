import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { User, usersList } from "../user-list/user-list";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User | null> {
  resolve(route: ActivatedRouteSnapshot): Observable<User | null> {
    const userId = route.params['id'];
    const user = usersList.find((user) => user.id == userId);
    return of(user ? user as User : null);
  }
}
