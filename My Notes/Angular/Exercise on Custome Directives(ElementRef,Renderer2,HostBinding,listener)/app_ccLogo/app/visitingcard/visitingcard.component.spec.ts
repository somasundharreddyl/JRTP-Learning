import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitingcardComponent } from './visitingcard.component';

describe('VisitingcardComponent', () => {
  let component: VisitingcardComponent;
  let fixture: ComponentFixture<VisitingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitingcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
