import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface User {
  username: string;
  password: string;

  email: string;
  role: 'seeker' | 'provider';
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  users: User[] = [
    {
      username: 'eman',
      password: '123',
      email: 'a@gmail.com',
      role: 'seeker',
    },
    {
      username: 'john',
      password: 'password1',
      email: 'john@example.com',
      role: 'provider',
    },
    {
      username: 'alice',
      password: 'secret123',
      email: 'alice@example.com',
      role: 'seeker',
    },
    {
      username: 'bob',
      password: 'mysecurepw',
      email: 'bob@example.com',
      role: 'provider',
    },
    {
      username: 'susan',
      password: 'ilovecats',
      email: 'susan@example.com',
      role: 'seeker',
    },
    {
      username: 'david',
      password: 'david123',
      email: 'david@example.com',
      role: 'provider',
    },
  ];

  loginFailed: boolean = false;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  user: User | undefined = undefined;

  formSubmitted = false;
  login(): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      const user = this.users.find((u) => u.username === username && u.password === password);
      this.user = user;
      if (user) {
        console.log('Login successful');
        this.loginFailed = false;


        if (user.role === 'seeker') {
          this.router.navigate(['/home']);
        } else if (user.role === 'provider') {
          this.router.navigate(['/provider']);
        }
      } else {
        this.loginFailed = true;
      }
    }
  }
}
