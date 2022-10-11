import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularprogressComponent } from './circularprogress.component';

describe('CircularprogressComponent', () => {
  let component: CircularprogressComponent;
  let fixture: ComponentFixture<CircularprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularprogressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
