import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageItem } from './image-item';

describe('ImageItem', () => {

  let component: ImageItem;
  let fixture: ComponentFixture<ImageItem>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ImageItem]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageItem);

    component = fixture.componentInstance;

    fixture.componentRef.setInput('image', {
      id: 1,
      url: 'test-url',
      alt: 'test-alt'
    });

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should emit remove event', () => {

    let emittedValue: number | undefined;

    component.remove.subscribe((value) => {
      emittedValue = value;
    });

    component.remove.emit(1);

    expect(emittedValue).toBe(1);

  });

});
