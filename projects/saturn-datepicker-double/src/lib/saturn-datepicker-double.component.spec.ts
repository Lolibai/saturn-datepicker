import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaturnDatepickerDoubleComponent } from './saturn-datepicker-double.component';

describe('SaturnDatepickerDoubleComponent', () => {
  let component: SaturnDatepickerDoubleComponent;
  let fixture: ComponentFixture<SaturnDatepickerDoubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaturnDatepickerDoubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaturnDatepickerDoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
