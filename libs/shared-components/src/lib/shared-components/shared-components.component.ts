import { Component, EventEmitter, inject, Output } from '@angular/core';
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
  @Output() onSubmit: EventEmitter<{ login: string, password: string }> = new EventEmitter();

  private fb = inject(FormBuilder);

  form = this.fb.group({
    login: this.fb.control('', [
      Validators.required,
    ]),
    password: this.fb.control('', [
      Validators.required,
    ]),
  });

  get userLogged() {
    const logged = localStorage.getItem('userLogged');
    return logged ? JSON.parse(logged) : null;
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit({
        login: this.form.get('login')?.value ?? '',
        password: this.form.get('password')?.value ?? '',
      });
    }
  }
}
