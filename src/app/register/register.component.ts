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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = { username: '', password: '', email: '', role: 'seeker' };
  roleOptions: any[] = [
    { label: 'Seeker', value: 'seeker' },
    { label: 'Provider', value: 'provider' }
  ];
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


  userForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }
  formSubmitted = false;
  register(): void {
    this.formSubmitted = true;
    if (this.userForm.valid) {
      this.users.push(this.user);
      console.log(this.user);
      this.router.navigate(['/login']);
    } else {
      console.log('valid');
    }
  }
}
