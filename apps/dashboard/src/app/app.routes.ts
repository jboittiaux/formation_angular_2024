import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TestFormComponent } from './test-form/test-form.component';
import { formGuard } from './guards/form.guard';
import { TestPipeComponent } from './test-pipe/test-pipe.component';

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
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate: [authGuard],
  },
  {
    path: 'test-form',
    component: TestFormComponent,
    canActivate: [authGuard],
    canDeactivate: [formGuard],
  },
  {
    path: 'diaporama',
    loadChildren: () => import('./modules/diaporama/diaporama.module').then(m => m.DiaporamaModule),
    canActivate: [authGuard],
  },
  {
    path: 'test-pipe',
    component: TestPipeComponent,
    canActivate: [authGuard],
  },
];
