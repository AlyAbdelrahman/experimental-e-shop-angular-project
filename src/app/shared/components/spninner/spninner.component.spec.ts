import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpninnerComponent } from './spninner.component';

describe('SpninnerComponent', () => {
  let component: SpninnerComponent;
  let fixture: ComponentFixture<SpninnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpninnerComponent]
    });
    fixture = TestBed.createComponent(SpninnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
