import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedComponentsComponent } from '@my-workspace/shared-components';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SharedComponentsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-angular';

  get userLogged() {
    const logged = localStorage.getItem('userLogged');
    return logged ? JSON.parse(logged) : null;
  }

  logout() {
    localStorage.removeItem('userLogged');
  }
}
