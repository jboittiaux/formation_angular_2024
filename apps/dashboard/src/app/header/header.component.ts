import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { AuthService } from '../services/auth.service';
import { User } from '../services/user-list';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authService: AuthService = inject(AuthService);

  user!: User;

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      if (user !== null) {
        this.user = user;
      }
    })
  }

  logout() {
    this.authService.logout();
  }
}
