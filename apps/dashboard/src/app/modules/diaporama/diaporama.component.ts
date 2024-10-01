import { Component, inject, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { FormBuilder } from '@angular/forms';

interface Image {
  url: string;
}

@Component({
  selector: 'app-diaporama',
  templateUrl: './diaporama.component.html',
  styleUrl: './diaporama.component.scss',
})
export class DiaporamaComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);

  form = this.fb.group({
    size: this.fb.control(300, []),
    transitionTime: this.fb.control(1000, []),
  });

  images: Image[] = [
    { url: 'https://picsum.photos/id/237/600/400' },
    { url: 'https://picsum.photos/id/238/600/400' },
    { url: 'https://picsum.photos/id/239/600/400' },
    { url: 'https://picsum.photos/id/240/600/400' },
    { url: 'https://picsum.photos/id/241/600/400' },
    { url: 'https://picsum.photos/id/242/600/400' },
    { url: 'https://picsum.photos/id/243/600/400' },
    { url: 'https://picsum.photos/id/244/600/400' },
  ];

  imageSize: number = 300;
  transitionTime: number = 1000;

  currentImage!: Image;

  timer!: Subscription;

  ngOnInit(): void {
    this.currentImage = this.images[0];

    this.form.valueChanges.subscribe({
      next: (values) => {
        this.imageSize = values.size ?? 300;
        this.transitionTime = values.transitionTime ?? 1000;

        this.start();
      },
    });

    this.start();
  }

  start() {
    this.timer?.unsubscribe();
    this.timer = timer(this.transitionTime, this.transitionTime).subscribe(() => {
      this.currentImage = this.images[(this.images.indexOf(this.currentImage) + 1) % this.images.length];
    });
  }
}
