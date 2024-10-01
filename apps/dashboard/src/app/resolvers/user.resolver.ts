import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { User } from "../services/user-list";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User | null> {
  userService: UserService = inject(UserService);

  resolve(route: ActivatedRouteSnapshot): Observable<User | null> {
    const userId = route.params['id'];
    return this.userService.fetchUser(userId);
  }
}
