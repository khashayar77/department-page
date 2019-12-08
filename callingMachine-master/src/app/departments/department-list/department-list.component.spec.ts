import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
	MatIconModule,
	MatTableModule,
	MatSnackBarModule,
	MatTooltipModule,
	MatCardContent,
	MatCardModule,
	MatBottomSheetModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentListComponent } from './department-list.component';

describe('DepartmentListComponent', () => {
	let component: DepartmentListComponent;
	let fixture: ComponentFixture<DepartmentListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					MatIconModule,
					MatTableModule,
					TranslateModule,
					RouterTestingModule,
					TranslateModule.forRoot(),
					RouterModule,
					HttpClientModule,
					MatSnackBarModule,
					MatTooltipModule,
					MatCardModule,
					MatBottomSheetModule
				],
				declarations: [ DepartmentListComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DepartmentListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
