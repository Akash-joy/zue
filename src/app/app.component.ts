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
