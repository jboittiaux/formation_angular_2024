import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../services/user-list';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  user!: User;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      this.user = data['user'];
    });
  }
}
