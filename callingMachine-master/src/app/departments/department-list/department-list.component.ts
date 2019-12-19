import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../interfaces/department.interface';
import { MatSnackBar } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DepartmentUpdateComponent } from '../department-update/department-update.component';
import { Descriptionservice } from 'src/app/services/description.service';

@Component({
	selector: 'department-list',
	templateUrl: './department-list.component.html',
	styleUrls: [ './department-list.component.scss' ]
})
export class DepartmentListComponent implements OnInit {
	dataSource = new MatTableDataSource();

	displayedColumns: string[];
	descriptions: { [key: string]: string };

	constructor(
		private departmentService: DepartmentService,
		private descriptionservice: Descriptionservice,
		private snackbar: MatSnackBar,
		private buttomSheet: MatBottomSheet
	) {
		this.descriptions = this.descriptionservice.description;
		this.displayedColumns = [
			'Enable',
			'Id',
			'Unit',
			'Name',
			'Priority',
			'StartWorkingTime',
			'EndWorkingTime',
			// 'NoneWorkingDayTableId',
			'Queue',
			'QueryMethod',
			// 'UrlId',
			'CallMore',
			'RetryTime',
			'CallDurationLimit',
			'action'
		];

		this.getList();
	}

	private getList() {
		this.departmentService.list().subscribe((department) => {
			this.dataSource.data = department;
		});
	}

	ngOnInit() {}

	openBottomSheet(department: Department) {
		const bs_ref = this.buttomSheet.open(DepartmentUpdateComponent, {
			data: {
				department
			}
		});
		bs_ref.afterDismissed().subscribe((department) => {
			this.getList();
		});
	}
}
