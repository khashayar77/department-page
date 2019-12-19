import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySheetUplistsComponent } from './my-sheet-uplists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('MySheetUplistsComponent', () => {
	let component: MySheetUplistsComponent;
	let fixture: ComponentFixture<MySheetUplistsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					MySheetUplistsComponent,
					MatFormFieldModule,
					ReactiveFormsModule,
					MatCardModule,
					RouterTestingModule,
					FormsModule
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(MySheetUplistsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
