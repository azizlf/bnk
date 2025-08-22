import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFComponent } from './password-f.component';

describe('PasswordFComponent', () => {
  let component: PasswordFComponent;
  let fixture: ComponentFixture<PasswordFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordFComponent]
    });
    fixture = TestBed.createComponent(PasswordFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
