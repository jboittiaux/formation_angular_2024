import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserResolver } from '../../resolvers/user.resolver';
import { HeaderComponent } from '../../header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: UserListComponent,
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
        resolve: { user: UserResolver },
      },
    ],
  },
];

@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class UserModule { }
