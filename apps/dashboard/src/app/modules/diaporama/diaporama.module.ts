import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaporamaComponent } from './diaporama.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: DiaporamaComponent,
  },
];

@NgModule({
  declarations: [
    DiaporamaComponent,
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DiaporamaModule { }
