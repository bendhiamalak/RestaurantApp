import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationPlatComponent } from './visualisation-plat.component';

describe('VisualisationPlatComponent', () => {
  let component: VisualisationPlatComponent;
  let fixture: ComponentFixture<VisualisationPlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualisationPlatComponent]
    });
    fixture = TestBed.createComponent(VisualisationPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
