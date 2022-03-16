import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDialogComponent } from './stats-dialog.component';

describe('StatsDialogComponent', () => {
  let component: StatsDialogComponent;
  let fixture: ComponentFixture<StatsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
