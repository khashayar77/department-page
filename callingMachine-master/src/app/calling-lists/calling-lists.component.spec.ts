import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingListsComponent } from './calling-lists.component';
import {
	MatIconModule,
	MatTableModule,
	MatTableDataSource,
	MatFormFieldModule,
	MatOptionModule,
	MatSelectModule,
	MatPaginatorModule,
	MatSnackBarModule,
	MatFormFieldControl,
	MatInputModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CallingListsComponent', () => {
	let component: CallingListsComponent;
	let fixture: ComponentFixture<CallingListsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					MatIconModule,
					MatTableModule,
					RouterModule,
					RouterTestingModule,
					ReactiveFormsModule,
					MatFormFieldModule,
					MatOptionModule,
					MatSelectModule,
					TranslateModule,
					MatPaginatorModule,
					HttpClientModule,
					MatSnackBarModule,
					TranslateModule.forRoot(),
					MatFormFieldModule,
					MatInputModule,
					BrowserAnimationsModule
				],
				declarations: [ CallingListsComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CallingListsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
