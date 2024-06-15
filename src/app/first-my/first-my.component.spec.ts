import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstMyComponentComponent } from './first-my.component';

describe('FirstMyComponentComponent', () => {
  let component: FirstMyComponentComponent;
  let fixture: ComponentFixture<FirstMyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstMyComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FirstMyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
