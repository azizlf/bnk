import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactSocialProjectComponent } from './impact-social-project.component';

describe('ImpactSocialProjectComponent', () => {
  let component: ImpactSocialProjectComponent;
  let fixture: ComponentFixture<ImpactSocialProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactSocialProjectComponent]
    });
    fixture = TestBed.createComponent(ImpactSocialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
