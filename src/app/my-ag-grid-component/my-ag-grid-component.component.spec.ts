import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAgGridComponentComponent } from './my-ag-grid-component.component';

describe('MyAgGridComponentComponent', () => {
  let component: MyAgGridComponentComponent;
  let fixture: ComponentFixture<MyAgGridComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAgGridComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAgGridComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
