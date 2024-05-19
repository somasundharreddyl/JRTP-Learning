import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCountComponent } from './emp-count.component';

describe('EmpCountComponent', () => {
  let component: EmpCountComponent;
  let fixture: ComponentFixture<EmpCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
