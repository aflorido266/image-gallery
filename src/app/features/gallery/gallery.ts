import { Component, signal } from '@angular/core';

import {
  CdkDropList,
  CdkDrag,
  CdkDragDrop,
  moveItemInArray
} from '@angular/cdk/drag-drop';

import { IImage } from '../../interfaces/image.interface';
import { ImageItem } from '../../image-item/image-item';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageItem, CdkDropList, CdkDrag],
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
  ]);

  selectedImages = signal(new Set<number>());

  deleteImage(id: number) {

    this.images.update(images =>
      images.filter(image => image.id !== id)
    );

    this.selectedImages.update(selected => {

      const updated = new Set(selected);

      updated.delete(id);

      return updated;

    });

  }

  drop(event: CdkDragDrop<IImage[]>) {

    const updatedImages = [...this.images()];

    moveItemInArray(
      updatedImages,
      event.previousIndex,
      event.currentIndex
    );

    this.images.set(updatedImages);

  }

  toggleSelection(id: number) {

    this.selectedImages.update(selected => {

      const updated = new Set(selected);

      if (updated.has(id)) {

        updated.delete(id);

      } else {

        updated.add(id);

      }

      return updated;

    });

  }
deleteSelectedImages() {

  const confirmed = confirm(
    `Delete ${this.selectedImages().size} selected image(s)?`
  );

  if(!confirmed) return;

  this.images.update(images =>

    images.filter(
      image => !this.selectedImages().has(image.id)
    )

  );

  this.selectedImages.set(new Set());

}
}