import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CallRequest } from '../interfaces/call-request.interface';
import { MatTableDataSource } from '@angular/material';
import { CallingService } from '../services/calling.service';
import { MatSnackBar } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MySheetCallingListComponent } from '../components/my-sheet-calling-list/my-sheet-calling-list.component';

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
	callStatusList: number[] = [ 1, 2 ];
	num: Num[] = [ { value: '1', viewValue: '1' }, { value: '2', viewValue: '2' }, { value: '2', viewValue: '2' } ];
	current_page: number;
	total: number;
	displayedColumns: string[];
	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;
	dataSource = new MatTableDataSource<CallRequest>([]);
	pageNo: number;

	constructor(
		private callingService: CallingService,
		private matSnackBar: MatSnackBar,
		private bottomSheet: MatBottomSheet
	) {
		this.displayedColumns = [
			'CustomerId',
			'PhoneNumber',
			'DepartmentName',
			'UrlId',
			'AddDate',
			'RetryTime',
			'LockCall',
			'Attempt',
			'CallStatus',
			'qID',
			'CallDuration',
			'Info1',
			'Info2',
			'Info3',
			'action'
		];
		this.current_page = 0;
		this.search({ page_no: 0 });
		this.getList();
	}
	// form group
	filterForm = new FormGroup({
		IdFilter: new FormControl(),
		NumberFilter: new FormControl(),
		DepartmentFilter: new FormControl(),
		AddDateFilter: new FormControl(),
		CallStatusFilter: new FormControl()
	});

	private getList(pageNo: number = 0, pageSize: number = 1) {
		this.callingService.list(pageNo, pageSize).subscribe((response) => {
			this.total = response.total;
			this.pageNo = response.page_no;
			this.dataSource.data = response.Result;
		});
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}

	openBottomSheet(callRequest: CallRequest) {
		this.bottomSheet.open(MySheetCallingListComponent, {
			data: {
				callRequest
			}
		});

		//TODO:
		this.getList();
	}

	pageChanged(event: PageEvent) {
		this.getList(event.pageIndex, event.pageSize);
	}

	remove(item: CallRequest) {
		debugger;
		this.callingService.remove(item.ID).subscribe((res) => {
			debugger;
		});
		this.matSnackBar.open('رکورد مورد نظر حذف شد', null, { duration: 999 });
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
}
