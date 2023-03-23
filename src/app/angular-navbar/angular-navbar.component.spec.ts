import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNavbarComponent } from './angular-navbar.component';

describe('AngularNavbarComponent', () => {
  let component: AngularNavbarComponent;
  let fixture: ComponentFixture<AngularNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
