import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { setLs } from '../../utils/ls';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    const email = this.form.controls.email.value as string;
    const password = this.form.controls.password.value as string;

    this.loginService.login(email, password).subscribe((data) => {
      if (data.token) {
        setLs('token', data.token);
        this.router.navigate(['/']);
      }
    });
  }
}
