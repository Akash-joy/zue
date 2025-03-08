import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'zue stiching studio';
  clicks: number = 0;
   username = localStorage.getItem('username');
   password = localStorage.getItem('password');


  items: MenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'Work',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/work',
        disabled: true
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-user',
        routerLink: '/about',
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-phone',
        routerLink: '/contact',
      },
    ];
  }

  onTripleClick(): void {
    this.clicks++;
    if (this.clicks === 4) {
      if (this.isAdminUser()) {
        this.router.navigate(['/work']);
      } else {
        this.router.navigate(['/login']);
      }
      this.clicks = 0;
    }

  }

  isAdminUser(){
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username === 'ZueStichingStudio' && password === 'varsha123') {
      return true;
    } else {
      return false;
    }
  }
}
