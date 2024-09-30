import { Route } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { UserResolver } from './resolvers/user.resolver';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UserListComponent,
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        resolve: {
          user: UserResolver,
        },
      },
    ]
  },
];
