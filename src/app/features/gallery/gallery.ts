import { Component, signal } from '@angular/core';
import { IImage } from '../../interfaces/image.interface';
import { ImageItem } from '../../image-item/image-item';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItem],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})



export class Gallery {

  images = signal<IImage[]>([
    {
      id: 1,
      url: 'https://picsum.photos/id/237/300/200',
      alt: 'Avatar 1'
    },
    {
      id: 2,
      url: 'https://picsum.photos/id/238/300/200',
      alt: 'Avatar 2'
    },
    {
      id: 3,
      url: 'https://picsum.photos/id/239/300/200',
      alt: 'Avatar 3'
    },
    {
      id: 4,
      url: 'https://picsum.photos/id/240/300/200',
      alt: 'Avatar 4'
    },
    {
      id: 5,
      url: 'https://picsum.photos/id/241/300/200',
      alt: 'Avatar 5'
    },
    {
      id: 6,
      url: 'https://picsum.photos/id/242/300/200',
      alt: 'Avatar 6'
    },
    {
      id: 7,
      url: 'https://picsum.photos/id/243/300/200',
      alt: 'Avatar 7'
    },
    {
      id: 8,
      url: 'https://picsum.photos/id/244/300/200',
      alt: 'Avatar 8'
    }
  ]);

}