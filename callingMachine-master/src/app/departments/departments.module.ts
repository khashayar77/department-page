import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
	MatTooltipModule,
	MatDatepickerModule,
	MatSliderModule,
	MatNativeDateModule,
	MatExpansionModule,
	MatBottomSheetModule,
	MatPaginatorModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ActivationStatusPipe } from './pipes/activation-status.pipe';

@NgModule({
	declarations: [ DepartmentListComponent, DepartmentUpdateComponent, ActivationStatusPipe ],
	exports: [ DepartmentListComponent ],
	entryComponents: [ DepartmentUpdateComponent ],
	providers: [],
	imports: [
		CommonModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		MatTooltipModule,
		MatPaginatorModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		MatDatepickerModule,
		MatSliderModule,
		MatNativeDateModule,
		MatExpansionModule,
		MatBottomSheetModule,
		TranslateModule.forChild({}),
		FormsModule
	]
})
export class DepartmentsModule {}
