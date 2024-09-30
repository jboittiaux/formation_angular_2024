import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { usersList } from './user-list';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users: any[] = usersList;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute);
  }
}
