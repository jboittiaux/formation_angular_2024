import { Route } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { UserResolver } from './resolvers/user.resolver';
import { authGuard, authGuardChild } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuardChild],
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        resolve: {
          user: UserResolver,
        },
      },
    ],
  },
];
