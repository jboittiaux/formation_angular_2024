import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formule',
  standalone: true,
  pure: true,
})
export class FormulePipe implements PipeTransform {
  transform(value: number): number {
    if (value <= 1) {
      return 1;
    }

    return 2 * this.transform(value - 1) + 3 * this.transform(value - 2);
  }
}
