import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionSoonComponent } from './section-soon.component';

describe('SectionSoonComponent', () => {
  let component: SectionSoonComponent;
  let fixture: ComponentFixture<SectionSoonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
