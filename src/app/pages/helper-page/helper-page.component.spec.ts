import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperPageComponent } from './helper-page.component';

describe('HelperPageComponent', () => {
  let component: HelperPageComponent;
  let fixture: ComponentFixture<HelperPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
