import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './auth.service';

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
//   { path: 'work', component: WorkComponent, canActivate: [AuthGuard] },
//   { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
//   { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
//   { path: 'login', component: LoginComponent },
// ];


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
