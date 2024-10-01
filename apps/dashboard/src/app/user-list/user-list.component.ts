import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../services/user-list';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private userService: UserService = inject(UserService);

  users!: User[];
  usersFiltered!: User[];

  searchForm = this.fb.group({
    search: this.fb.control('', []),
  });

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute);
  }

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.usersFiltered = users;
      }
    });

    this.searchForm.valueChanges.pipe(
      debounceTime(500),
    ).subscribe({
      next: (values) => {
        const search = (values?.search as string).toLowerCase();

        if (search) {
          this.usersFiltered = this.users.filter((user) => user.name.toLowerCase().includes(search));
        } else {
          this.usersFiltered = this.users;
        }
      },
    });
  }
}
