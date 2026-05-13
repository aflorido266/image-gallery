import { Component, input } from '@angular/core';
import { IImage } from '../interfaces/image.interface';

@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
})
export class ImageItem {

  image = input.required<IImage>();

  featured = input(false);

}
