import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSoonComponent } from './section-soon.component';

describe('SectionSoonComponent', () => {
  let component: SectionSoonComponent;
  let fixture: ComponentFixture<SectionSoonComponent>;

  beforeEach(async(() => {
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
