import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
  ) {}
  title = 'art-museum-client';
  isLogin: boolean;
  checkLogin(): void {
    this.isLogin = this.authService.isLoggedIn;
  }

}
