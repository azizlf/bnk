import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactSocialComponent } from './impact-social.component';

describe('ImpactSocialComponent', () => {
  let component: ImpactSocialComponent;
  let fixture: ComponentFixture<ImpactSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactSocialComponent]
    });
    fixture = TestBed.createComponent(ImpactSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
