import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySheetCallingListComponent } from './my-sheet-calling-list.component';
import { MatFormFieldModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';

describe('MySheetCallingListComponent', () => {
	let component: MySheetCallingListComponent;
	let fixture: ComponentFixture<MySheetCallingListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ MySheetCallingListComponent, ReactiveFormsModule, MatCardModule, MatFormFieldModule ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(MySheetCallingListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
