import { CanActivateChildFn, CanActivateFn } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const hasUser = localStorage.getItem('userLogged') != null;

  if (!hasUser) {
    location.href = 'login';
    return false;
  }

  return true;
}

export const authGuardChild: CanActivateChildFn = () => {
  return true;
}
