import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsComponent } from '@my-workspace/shared-components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedComponentsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
