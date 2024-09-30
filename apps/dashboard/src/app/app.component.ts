import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { LoginComponent } from './login/login.component';

@Component({
  standalone: true,
  imports: [RouterModule, LoginComponent, NavigationComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard';

  get isLogged() {
    const logged = localStorage.getItem('logged');
    return logged ? JSON.parse(logged) : null;
  }

  logout() {
    localStorage.removeItem('logged');
  }
}
