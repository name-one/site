import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RviewImageComponent } from './rview-image.component';

describe('RviewImageComponent', () => {
  let component: RviewImageComponent;
  let fixture: ComponentFixture<RviewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RviewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RviewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
