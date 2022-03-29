import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTeamsComponent } from './pro-teams.component';

describe('ProTeamsComponent', () => {
  let component: ProTeamsComponent;
  let fixture: ComponentFixture<ProTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
