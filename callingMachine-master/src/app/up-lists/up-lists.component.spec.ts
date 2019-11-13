import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpListsComponent } from './up-lists.component';
import { MatTableModule, MatIconModule, MatPaginatorModule, MatSnackBarModule } from '@angular/material';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UpListsComponent', () => {
	let component: UpListsComponent;
	let fixture: ComponentFixture<UpListsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					MatTableModule,
					MatIconModule,
					RouterModule,
					RouterTestingModule,
					TranslateModule.forRoot(),
					MatPaginatorModule,
					HttpClientModule,
					MatSnackBarModule,
					BrowserAnimationsModule
				],
				declarations: [ UpListsComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(UpListsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
