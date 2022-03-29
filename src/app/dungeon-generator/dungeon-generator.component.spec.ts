import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonGeneratorComponent } from './dungeon-generator.component';

describe('DungeonGeneratorComponent', () => {
  let component: DungeonGeneratorComponent;
  let fixture: ComponentFixture<DungeonGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DungeonGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
