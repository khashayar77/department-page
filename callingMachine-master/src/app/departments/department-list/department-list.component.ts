import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../interfaces/department.interface';
import { MatSnackBar } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DepartmentUpdateComponent } from '../department-update/department-update.component';

@Component({
	selector: 'department-list',
	templateUrl: './department-list.component.html',
	styleUrls: [ './department-list.component.scss' ]
})
export class DepartmentListComponent implements OnInit {
	total: number;
	pageNo: number;
	dataSource = new MatTableDataSource<Department>([]);
	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;
	displayedColumns: string[];
	itemsPerPageLabel: string;
	nextPageLabel: string;
	previousPageLabel: string;
	changes: any;
	constructor(
		private departmentService: DepartmentService,
		private snackbar: MatSnackBar,
		private buttomSheet: MatBottomSheet
	) {
		this.displayedColumns = [
			'info',
			'priority',
			'department',
			'Unit',
			'start_working_time',
			'end_working_time',
			'queue',
			'Enable',
			'query_method',
			'call_more',
			'retry_time',
			'action'
		];

		this.getList();
	}

	private getList(pageNo: number = 0, pageSize: number = 1) {
		this.departmentService.list(pageNo, pageSize).subscribe((response) => {
			this.total = response.total;
			this.pageNo = response.page_no;
			this.dataSource.data = response.Result;
		});
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}

	openBottomSheet(department: Department) {
		this.buttomSheet.open(DepartmentUpdateComponent, {
			data: {
				department
			}
		});
		// TODO:
		this.getList();
	}
	pageChanged(event: PageEvent) {
		this.getList(event.pageIndex, event.pageSize);
	}
}
