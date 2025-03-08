import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';


export const authserviceGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  if (username === 'ZueStichingStudio' && password === 'varsha123') {
    return true; // Allow navigation
  } else {
    router.navigate(['/login']); // Redirect to login if not authorized
    return false;
  }
};
