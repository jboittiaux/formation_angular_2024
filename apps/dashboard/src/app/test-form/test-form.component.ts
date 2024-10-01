import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { CanDeactivateFormComponent } from '../guards/form.guard';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
})
export class TestFormComponent implements OnInit, CanDeactivateFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    champ1: this.fb.control('', []),
    champ2: this.fb.control('', []),
  });

  unsavedChanges: boolean = false;

  ngOnInit(): void {
      this.form.valueChanges.subscribe({
        next: (values) => {
          this.unsavedChanges = false;
          for (const key in values) {
            this.form.get(key)?.value !== '';
            this.unsavedChanges = true;
          }
        }
      });
  }

  canDeactivate(): boolean {
    if (this.unsavedChanges) {
      return confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    return true;
  }
}
