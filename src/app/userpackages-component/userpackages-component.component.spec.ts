import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpackagesComponentComponent } from './userpackages-component.component';

describe('UserpackagesComponentComponent', () => {
  let component: UserpackagesComponentComponent;
  let fixture: ComponentFixture<UserpackagesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpackagesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpackagesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
