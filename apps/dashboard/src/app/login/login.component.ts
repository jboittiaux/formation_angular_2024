import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsComponent } from '@my-workspace/shared-components';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedComponentsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private authService: AuthService = inject(AuthService);

  ngOnInit(): void {
    // si on est déjà loggé, redirection sur la home
    if (localStorage.getItem('userLogged')) {
      window.location.href = 'home';
    }
  }

  onSubmit(data: { login: string, password: string }) {
    const { login, password } = data;
    this.authService.authenticate(login, password);
  }
}
