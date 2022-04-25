import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatoCardComponent } from './tomato-card.component';

describe('TomatoCardComponent', () => {
  let component: TomatoCardComponent;
  let fixture: ComponentFixture<TomatoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomatoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
