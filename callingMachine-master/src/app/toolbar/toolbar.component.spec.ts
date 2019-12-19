import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { TranslateModule } from '@ngx-translate/core';
import {
	MatIconModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatSidenavModule,
	MatCardModule,
	_MatMenuDirectivesModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ToolbarComponent', () => {
	let component: ToolbarComponent;
	let fixture: ComponentFixture<ToolbarComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					TranslateModule.forRoot(),
					MatIconModule,
					MatToolbarModule,
					RouterModule,
					HttpClientModule,
					RouterTestingModule,
					MatFormFieldModule,
					MatSidenavModule
				],
				declarations: [ ToolbarComponent, MatFormFieldModule, MatCardModule ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(ToolbarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
