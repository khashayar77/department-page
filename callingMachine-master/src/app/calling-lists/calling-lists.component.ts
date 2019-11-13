import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CallRequest } from '../interfaces/call-request.interface';
import { MatTableDataSource } from '@angular/material';
import { CallingService } from '../services/calling.service';
import { MatSnackBar } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDatepicker } from '@angular/material/datepicker';
export interface Num {
	value: string;
	viewValue: string;
}
@Component({
	selector: 'app-calling-lists',
	templateUrl: './calling-lists.component.html',
	styleUrls: [ './calling-lists.component.scss' ]
})
export class CallingListsComponent {
	callStatusList: number[] = [ 0, 1 ];
	num: Num[] = [ { value: '0', viewValue: '0' }, { value: '1', viewValue: '1' }, { value: '2', viewValue: '2' } ];
	// tslint:disable-next-line: variable-name
	current_page: number;
	total: number;

	displayedColumns: string[] = [
		'Customer_ID',
		'Number',
		'Department',
		'URL_ID',
		'Add_Date',
		'Retry_Time',
		'Lock_Call',
		'Attempt',
		'Call_Status',
		'Call_Duration',
		'Info1',
		'action'
	];
	dataSource = new MatTableDataSource<CallRequest>();
	constructor(
		private callingService: CallingService,
		private MatSnackBar: MatSnackBar,
		private _bottomSheet: MatBottomSheet
	) {
		// tslint:disable-next-line: no-unused-expression

		this.current_page = 0;
		this.search({ page_no: 0 });
	}
	// form group
	filterForm = new FormGroup({
		IdFilter: new FormControl(),
		NumberFilter: new FormControl(),
		DepartmentFilter: new FormControl(),
		AddDateFilter: new FormControl(),
		CallStatusFilter: new FormControl()
	});

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}

	remove(item: CallRequest) {
		debugger;
		this.callingService.remove(item.ID).subscribe((res) => {
			debugger;
		});
		this.MatSnackBar.open('رکورد مورد نظر حذف شد', null, { duration: 999 });
	}

	search({ page_no } = {} as any) {
		this.callingService
			.query({
				criteria: this.filterForm.value,
				pageNo: page_no || 0
			})
			.subscribe((res) => {
				this.dataSource.data = res.Result;
				this.current_page = res.page_no;
				this.total = res.total_items;
			});
	}
	// page_change(e: PageEvent) {
	//   e.
	//   this.search({ page_no: ++this.current_page });
	// }

	get ID() {
		return this.filterForm.get('IdFilter');
	}
	get Number() {
		return this.filterForm.get('NumberFilter');
	}
	get Department() {
		return this.filterForm.get('DepartmentFilter');
	}
	get AddDate() {
		return this.filterForm.get('AddDateFilter');
	}
	get CallStatus() {
		return this.filterForm.get('CallStatusFilter');
	}
	openBottomSheet() {}
}
