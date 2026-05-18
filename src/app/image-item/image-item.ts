import { Component, input,output, ChangeDetectionStrategy } from '@angular/core';
import { IImage } from '../interfaces/image.interface';



@Component({
  selector: 'app-image-item',
  standalone: true,
  imports: [],

  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageItem {

  image = input.required<IImage>();
  featured = input(false);
  remove = output<number>();
}


