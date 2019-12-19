import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {
	MatCardModule,
	MatFormFieldModule,
	MatIconModule,
	MatTooltipModule,
	MatDividerModule,
	MatListModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
	let component: DashboardComponent;
	let fixture: ComponentFixture<DashboardComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					MatCardModule,
					MatFormFieldModule,
					MatIconModule,
					MatCardModule,
					TranslateModule.forRoot(),
					MatTooltipModule,
					MatDividerModule,
					MatListModule,
					HttpClientModule
				],
				declarations: [ DashboardComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
