import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesComponentComponent } from './packages-component.component';

describe('PackagesComponentComponent', () => {
  let component: PackagesComponentComponent;
  let fixture: ComponentFixture<PackagesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
