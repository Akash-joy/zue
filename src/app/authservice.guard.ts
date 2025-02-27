import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';


export const authserviceGuard: CanActivateFn = (route, state) => { debugger
  const router = new Router(); // Create Router instance
  const messageService = inject(MessageService); // Inject PrimeNG Message Service

  messageService.add({ severity: 'warn', summary: 'Access Denied', detail: 'This page is currently disabled!' });
  setTimeout(() => {
    router.navigate(['/home']); // ✅ Redirect to Home Page
  }, 500); // Small delay to show toast
  return false; // Disable the route
};
