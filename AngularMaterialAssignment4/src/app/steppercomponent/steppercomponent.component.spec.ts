import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppercomponentComponent } from './steppercomponent.component';

describe('SteppercomponentComponent', () => {
  let component: SteppercomponentComponent;
  let fixture: ComponentFixture<SteppercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteppercomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteppercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
