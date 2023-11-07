import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // loginForm: FormGroup;


  // constructor(private router:Router) {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required])
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const email = this.loginForm.get('email')?.value;
  //     const password = this.loginForm.get('password')?.value;
  //     console.log(email);
  //     console.log(password);
  //     if (email === 'user@example.com' && password === 'password123') {
  //       localStorage.setItem('authToken', 'yourAuthTokenHere');
  //       this.router.navigate(['/home']);
  //     } else {
       
  //     }
  //   }
  // }

}
