import { Route } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { UserResolver } from './resolvers/user.resolver';
import { authGuard, authGuardChild } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TestFormComponent } from './test-form/test-form.component';
import { formGuard } from './guards/form.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
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
  {
    path: 'test-form',
    component: TestFormComponent,
    canDeactivate: [formGuard],
  }
];
