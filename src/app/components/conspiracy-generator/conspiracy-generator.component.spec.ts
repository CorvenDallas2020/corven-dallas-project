import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConspiracyGeneratorComponent } from './conspiracy-generator.component';

describe('ConspiracyGeneratorComponent', () => {
  let component: ConspiracyGeneratorComponent;
  let fixture: ComponentFixture<ConspiracyGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConspiracyGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConspiracyGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
