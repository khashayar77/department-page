import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentUpdateComponent } from './department-update.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule, MatTooltipModule, MatBottomSheetModule } from '@angular/material';

describe('DepartmentUpdateComponent', () => {
	let component: DepartmentUpdateComponent;
	let fixture: ComponentFixture<DepartmentUpdateComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					DepartmentUpdateComponent,
					TranslateModule.forRoot(),
					MatCardModule,
					MatTooltipModule,
					MatBottomSheetModule,
					MatCardModule
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DepartmentUpdateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
