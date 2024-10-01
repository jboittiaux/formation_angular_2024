import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { FormulePipe } from '../pipes/formule.pipe';

@Component({
  selector: 'app-test-pipe',
  standalone: true,
  imports: [CommonModule, FormsModule, FormulePipe, HeaderComponent],
  templateUrl: './test-pipe.component.html',
  styleUrl: './test-pipe.component.scss',
})
export class TestPipeComponent {
  test: string = '';

  values: number[] = Array.from({length: 100}, (_, i) => 20 + i % 10);
}
