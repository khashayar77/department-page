import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySheetCallingListComponent } from './my-sheet-calling-list.component';

describe('MySheetCallingListComponent', () => {
  let component: MySheetCallingListComponent;
  let fixture: ComponentFixture<MySheetCallingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySheetCallingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySheetCallingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
