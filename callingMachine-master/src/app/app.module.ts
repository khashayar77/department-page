import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploadModule } from 'ng2-file-upload';
import { MatTooltipModule, MatPaginatorModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatSliderModule, DateAdapter } from '@angular/material';
import { MaterialModule } from './material/material.module';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorIntl } from '@angular/material';
/**
 * components
 */
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UplaodListComponent } from './uplaod-list/uplaod-list.component';
import { CallingListsComponent } from './calling-lists/calling-lists.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { Error404Component } from './error404/error404.component';
import { AddDepartmentsComponent } from './add-departments/add-departments.component';
import { UpListsComponent } from './up-lists/up-lists.component';
import { MySheetUplistsComponent } from './components/my-sheet-uplists/my-sheet-uplists.component';
import { MySheetCallingListComponent } from './components/my-sheet-calling-list/my-sheet-calling-list.component';
/**
 * guards
 */
import { LogedInGuard } from './guards/loged-in.guard';
/**
 * interceptors
 */
import { AuthServiceMockInterceptor } from './mock-interceptors/auth-service-mock.interceptor';
import { CallRequestServiceMockInterceptor } from './mock-interceptors/call-request-service-mock.interceptor';
import { UpListsServiceMockInterceptore } from './mock-interceptors/uplists-service-mock-interceptore';
import { DepartmentServiceMockInterceptore } from './mock-interceptors/department-service-mock-interceptor';
/**
 * services
 */
import { DepartmentService } from './services/department.service';
import { DepartmentsModule } from './departments/departments.module';
import { CustomMatPaginatorIntl } from './departments/department-list/CustomMatPaginatorIntl ';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		LoginComponent,
		DashboardComponent,
		UplaodListComponent,
		CallingListsComponent,
		DepartmentDetailComponent,
		Error404Component,
		AddDepartmentsComponent,
		UpListsComponent,
		MySheetUplistsComponent,
		MySheetCallingListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		MatTooltipModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		MatPaginatorModule,
		ReactiveFormsModule,
		MatDatepickerModule,
		MatSliderModule,
		MatNativeDateModule,
		MatExpansionModule,
		MatBottomSheetModule,
		MatButtonToggleModule,

		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		}),
		FormsModule,
		FileUploadModule,
		/**
     * app modules
     */
		DepartmentsModule
	],
	providers: [
		LogedInGuard,
		DepartmentService,
		MatPaginatorIntl,
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: HttpErrorInterceptor,
		// 	multi: true
		// },
		{
			provide: MatPaginatorIntl,
			useClass: CustomMatPaginatorIntl
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthServiceMockInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: CallRequestServiceMockInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: UpListsServiceMockInterceptore,
			multi: true
		},

		{
			provide: HTTP_INTERCEPTORS,
			useClass: DepartmentServiceMockInterceptore,
			multi: true
		}
	],

	entryComponents: [ MySheetUplistsComponent, MySheetCallingListComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
