import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestFormComponent } from './invest-form.component';

describe('InvestFormComponent', () => {
  let component: InvestFormComponent;
  let fixture: ComponentFixture<InvestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestFormComponent]
    });
    fixture = TestBed.createComponent(InvestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
