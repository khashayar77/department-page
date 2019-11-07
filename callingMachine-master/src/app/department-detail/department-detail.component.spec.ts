import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDetailComponent } from './department-detail.component';
import {
	MatCardModule,
	MatOptionModule,
	MatSelectModule,
	MatFormFieldModule,
	MatIconModule,
	MatSnackBarModule,
	MatFormFieldControl,
	MatInputModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DepartmentDetailComponent', () => {
	let component: DepartmentDetailComponent;
	let fixture: ComponentFixture<DepartmentDetailComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				// tslint:disable-next-line: max-line-length
				imports: [
					MatCardModule,
					ReactiveFormsModule,
					MatOptionModule,
					MatSelectModule,
					MatFormFieldModule,
					TranslateModule.forRoot(),
					MatIconModule,
					HttpClientModule,
					RouterTestingModule,
					MatSnackBarModule,
					MatInputModule,
					BrowserAnimationsModule
				],
				declarations: [ DepartmentDetailComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DepartmentDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
