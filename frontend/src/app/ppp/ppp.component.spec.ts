import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PppComponent } from './ppp.component';

describe('PppComponent', () => {
  let component: PppComponent;
  let fixture: ComponentFixture<PppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
