import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultpipeComponent } from './defaultpipe.component';

describe('DefaultpipeComponent', () => {
  let component: DefaultpipeComponent;
  let fixture: ComponentFixture<DefaultpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultpipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
