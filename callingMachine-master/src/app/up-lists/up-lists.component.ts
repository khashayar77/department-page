import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UpLists } from '../interfaces/UpLists';
import { UplistsService } from '../services/uplists.service';
import { MatSnackBar } from '@angular/material';
import { pluck } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MySheetUplistsComponent } from '../components/my-sheet-uplists/my-sheet-uplists.component';
import { Descriptionservice } from 'src/app/services/description.service';
@Component({
	selector: 'app-up-lists',
	templateUrl: './up-lists.component.html',
	styleUrls: [ './up-lists.component.scss' ]
})
export class UpListsComponent implements OnInit {
	dataSource = new MatTableDataSource();
	id: string;
	uplists: UpLists;
	selectedDepartment: UpLists;
	displayedColumns: string[];
	// @ViewChild(MatPaginator, { static: true })
	// paginator: MatPaginator;
	// PageNo: number;
	// Total: number;
	descriptions: { [key: string]: string };

	constructor(
		private UpListsService: UplistsService,
		private descriptionservice: Descriptionservice,
		private snackbar: MatSnackBar,
		private router: ActivatedRoute,
		private buttomSheet: MatBottomSheet
	) {
		this.descriptions = this.descriptionservice.description;
		this.displayedColumns = [ 'Description', 'Id', 'Name', 'OperatorName', 'actions' ];

		this.getList();

		// this.UpListsService.list().subscribe((response) => {
		// 	this.dataSource.data = response.Result;

		// 	this.formGroup = new FormGroup({
		// 		ListID: new FormControl('1', [ Validators.required ]),
		// 		AllRecords: new FormControl('1', [ Validators.required ]),
		// 		SuccessRecords: new FormControl('1', [ Validators.required ]),
		// 		Date: new FormControl('', [ Validators.required ]),
		// 		actions: new FormControl('', [ Validators.required ]),
		// 		CustomerID: new FormControl('', [ Validators.required ]),
		// 		department: new FormControl(''),
		// 		add_date: new FormControl(''),
		// 		Last_attempt_date: new FormControl(''),
		// 		lock_call: new FormControl(''),
		// 		call_status: new FormControl(''),
		// 		CallDurationLimit: new FormControl(''),
		// 		info: new FormControl('')
		// 	});
		// });
	}

	private getList() {
		this.UpListsService.list().subscribe((uplists) => {
			// this.Total = response.total;
			// this.PageNo = response.page_no;
			this.dataSource.data = uplists;
		});
	}

	ngOnInit() {
		// this.dataSource.paginator = this.paginator;
	}

	openBottomSheet(uplists: UpLists) {
		this.buttomSheet.open(MySheetUplistsComponent, {
			data: {
				uplists
			}
		});

		// TODO:

		this.getList();
	}

	// pageChanged(event: PageEvent) {
	// 	this.getList(event.pageIndex, event.pageSize);
	// }

	remove(item: UpLists) {
		this.UpListsService.remove(item.Id).subscribe((res) => {});
		this.snackbar.open('رکورد مورد نظر حذف شد', null, { duration: 999 });
		return;
	}
}
