import { CanDeactivateFn } from '@angular/router';

export interface CanDeactivateFormComponent {
  canDeactivate: () => boolean;
}

export const formGuard: CanDeactivateFn<CanDeactivateFormComponent> = (component) => {
  return component.canDeactivate !== undefined ? component.canDeactivate() : true;
};
