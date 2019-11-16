import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySheetUplistsComponent } from './my-sheet-uplists.component';

describe('MySheetUplistsComponent', () => {
  let component: MySheetUplistsComponent;
  let fixture: ComponentFixture<MySheetUplistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySheetUplistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySheetUplistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
