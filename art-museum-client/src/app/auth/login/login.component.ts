import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  message: string;

  email: string;
  pwd: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private location: Location,
  ) { }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.email = '';
    this.pwd = '';
  }


  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login(this.email, this.pwd).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        // let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/';

        // Redirect the user
        // this.router.navigateByUrl(redirect);
        this.location.back();
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  logoff(): void {
    this.authService.logoff().subscribe(m => {
      this.authService.logout();
    });
  }

}
