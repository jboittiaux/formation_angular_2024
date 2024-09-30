import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lib-shared-components',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shared-components.component.html',
  styleUrl: './shared-components.component.scss',
})
export class SharedComponentsComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    login: this.fb.control('', [
      Validators.required,
    ]),
    password: this.fb.control('', [
      Validators.required,
    ]),
  });

  get isLogged() {
    const logged = localStorage.getItem('logged');
    return logged ? JSON.parse(logged) : null;
  }

  onSubmit() {
    if (this.form.valid) {
      localStorage.setItem('logged', JSON.stringify(this.form.value));
    }
  }

  logout() {
    localStorage.removeItem('logged');
  }
}
