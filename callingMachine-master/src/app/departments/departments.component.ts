import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentService } from '../services/department.service';
import { Department } from '../interfaces/department.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatPercent } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { element } from 'protractor';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MySheetComponent } from '../components/my-sheet/my-sheet.component';

// import { DepartmentService } from '../services/department.service';
@Component({
	selector: 'app-departments',
	templateUrl: './departments.component.html',
	styleUrls: [ './departments.component.scss' ]
})
export class DepartmentsComponent implements OnInit {
	constructor(
		private DepartmentService: DepartmentService,
		private snackbar: MatSnackBar,
		private buttomSheet: MatBottomSheet
	) {
		this.DepartmentService.list().subscribe((response) => {
			this.dataSource.data = response.Result;

			this.formGroup = new FormGroup({
				id: new FormControl('1', [ Validators.required ]),
				Unit: new FormControl('1', [ Validators.required ]),
				info: new FormControl('1', [ Validators.required ]),
				priority: new FormControl('', [ Validators.required ]),
				department: new FormControl('', [ Validators.required ]),
				start_working_time: new FormControl(''),
				end_working_time: new FormControl(''),
				queue: new FormControl(''),
				query_method: new FormControl(''),
				call_more: new FormControl(''),
				retry_time: new FormControl('')
			});
		});

		// this.DepartmentService.remove({ criteria: {}, pageNo: 0 }).subscribe((response: any) => {
		// 	this.dataSource.data = response;
		// 	this.DepartmentService.edit({ criteria: {}, pageNo: 0 }).subscribe((response: any) => {
		// 		this.dataSource.data = response;
		// 	});
		// });
	}
	// tslint:disable-next-line: no-use-before-declare
	dataSource = new MatTableDataSource<Department>([]);
	// tslint:disable-next-line: max-line-length
	displayedColumns: string[] = [
		'info',
		'priority',
		'department',
		'Unit',
		'start_working_time',
		'end_working_time',
		'queue',
		'query_method',
		'call_more',
		'retry_time',
		'action'
	];

	selectedDepartment: Department;

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;

	// tslint:disable-next-line: no-shadowed-variable

	formGroup: FormGroup;

	openBottomSheet(department: Department) {
		this.buttomSheet.open(MySheetComponent, {
			data: {
				department
			}
		});
	}

	remove(item: Department) {
		debugger;
		this.DepartmentService.remove(item.id).subscribe((res) => {
			debugger;
		});

		this.snackbar.open('رکورد مورد نظر حذف شد', null, { duration: 999 });
		return;
	}

	onselect(id: number) {
		console.log(id);
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}
