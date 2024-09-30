import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  get userLogged() {
    const userLogged = localStorage.getItem('userLogged');
    return userLogged ? JSON.parse(userLogged) : null;
  }

  logout() {
    localStorage.removeItem('userLogged');
    location.href = 'login';
  }
}
