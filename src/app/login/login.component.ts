import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    if ( this.username === 'ZueStichingStudio' && this.password === 'varsha123') {
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
      this.router.navigate(['/work']);
    }
  }
}
