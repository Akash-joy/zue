import { CanActivateFn } from '@angular/router';

export const authserviceGuard: CanActivateFn = (route, state) => {
  return true;
};
