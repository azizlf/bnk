import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestProjectComponent } from './invest-project.component';

describe('InvestProjectComponent', () => {
  let component: InvestProjectComponent;
  let fixture: ComponentFixture<InvestProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestProjectComponent]
    });
    fixture = TestBed.createComponent(InvestProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
