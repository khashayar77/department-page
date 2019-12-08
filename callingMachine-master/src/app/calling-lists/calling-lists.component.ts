import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CallRequest } from '../interfaces/call-request.interface';
import { MatTableDataSource } from '@angular/material';
import { CallingService } from '../services/calling.service';
import { MatSnackBar } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MySheetCallingListComponent } from '../components/my-sheet-calling-list/my-sheet-calling-list.component';
import { Department } from '../interfaces/department.interface';
import { Observable } from 'rxjs';
import { DepartmentService, UplistsService } from '../services';
import { UpLists } from '../interfaces/UpLists';

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
	departmets$: Observable<Department[]>;
	uploads_list$: Observable<UpLists[]>;
	current_page: number;
	total: number;

	displayedColumns: string[];
	// @ViewChild(MatPaginator, { static: true })
	// paginator: MatPaginator;
	dataSource = new MatTableDataSource<CallRequest>([]);
	// pageNo: number;

	constructor(
		private callingService: CallingService,
		private departmentService: DepartmentService,
		private uplistsService: UplistsService,
		private matSnackBar: MatSnackBar,
		private bottomSheet: MatBottomSheet
	) {
		this.departmets$ = this.departmentService.list();
		this.uploads_list$ = this.uplistsService.list();
		this.displayedColumns = [
			'CustomerId',
			'PhoneNumber',
			'DepartmentName',
			'UrlId',
			'AddDate',
			'LastAttemptDate',
			'RetryTime',
			'LockCall',
			'Attempt',
			'CallStatus',
			'CallDuration',
			'Info1',
			'info2',
			'info3',
			'action'
		];
		this.current_page = 0;
		this.search();
	}
	filterForm = new FormGroup({
		Number: new FormControl(),
		CustomerId: new FormControl(),
		Department: new FormControl(),
		NumbersList: new FormControl(),
		CallStatus: new FormControl()
	});

	openBottomSheet(callRequest: CallRequest) {
		this.bottomSheet.open(MySheetCallingListComponent, {
			data: {
				callRequest
			}
		});
	}

	// pageChanged(event: PageEvent) {
	// 	this.getList(event.pageIndex, event.pageSize);
	// }

	remove(item: CallRequest) {
		this.callingService.remove(item.Id).subscribe((res) => {
			this.matSnackBar.open('رکورد مورد نظر حذف شد', null, { duration: 999 });
			this.search();
		});
	}

	search() {
		debugger;
		this.callingService
			.query({
				criteria: this.filterForm.value,
				pageNo: this.current_page
			})
			.subscribe((res) => {
				debugger;
				// TODO:
				this.dataSource.data = res;
				this.current_page = 1;
				this.total = 100;
			});
	}
	// page_change(e: PageEvent) {
	//   e.
	//   this.search({ page_no: ++this.current_page });
	// }
}
