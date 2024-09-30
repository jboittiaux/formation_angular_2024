import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsComponent } from '@my-workspace/shared-components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedComponentsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    // si on est déjà loggé, redirection sur la home
    if (localStorage.getItem('userLogged')) {
      window.location.href = 'home';
    }
  }
}
