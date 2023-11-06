import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zue stiching studio';
  items: MenuItem[] | undefined;
  isAuthenticated: boolean;

  constructor() {
    // Check if the user is authenticated using localStorage or another method
    const authToken = localStorage.getItem('authToken');
    if(authToken){
      this.isAuthenticated=true ;
    }else{
      this.isAuthenticated=false;
    }
    // Set isAuthenticated to true if an authToken is found
  }

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
            },
            {
                label: 'About',
                icon: 'pi pi-fw pi-user',
                routerLink:'/about'

            },
           
            {
                label: 'Contact Us',
                icon: 'pi pi-phone',
                routerLink:'/contact'
            }
        ];
    }
}
