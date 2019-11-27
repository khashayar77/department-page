import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsComponent } from './department-list.component';
import { MatIconModule, MatTableModule, MatSnackBarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DepartmentsComponent', () => {
	let component: DepartmentsComponent;
	let fixture: ComponentFixture<DepartmentsComponent>;

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
					MatSnackBarModule
				],
				declarations: [ DepartmentsComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DepartmentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
