import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreastCancerPredictionComponent } from './breast-cancer-prediction.component';

describe('BreastCancerPredictionComponent', () => {
  let component: BreastCancerPredictionComponent;
  let fixture: ComponentFixture<BreastCancerPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreastCancerPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreastCancerPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
