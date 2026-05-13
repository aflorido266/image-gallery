import { Component, signal } from '@angular/core';
import { IImage } from '../../interfaces/image.interface';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  images = signal<IImage[]>([
    {
      id: 1,
      url: 'https://i.pravatar.cc/150?img=1',
      alt: 'Avatar 1'
    },
    {
      id: 2,
      url: 'https://i.pravatar.cc/150?img=2',
      alt: 'Avatar 2'
    },
    {
      id: 3,
      url: 'https://i.pravatar.cc/150?img=3',
      alt: 'Avatar 3'
    },
    {
      id: 4,
      url: 'https://i.pravatar.cc/150?img=4',
      alt: 'Avatar 4'
    },
    {
      id: 5,
      url: 'https://i.pravatar.cc/150?img=5',
      alt: 'Avatar 5'
    },
    {
      id: 6,
      url: 'https://i.pravatar.cc/150?img=6',
      alt: 'Avatar 6'
    },
    {
      id: 7,
      url: 'https://i.pravatar.cc/150?img=7',
      alt: 'Avatar 7'
    },
    {
      id: 8,
      url: 'https://i.pravatar.cc/150?img=8',
      alt: 'Avatar 8'
    }
  ]);

}