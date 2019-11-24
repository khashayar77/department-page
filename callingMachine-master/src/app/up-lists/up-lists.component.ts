import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UpLists } from '../interfaces/UpLists';
import { UplistsService } from '../services/uplists.service';
import { MatSnackBar } from '@angular/material';
import { pluck } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MySheetComponent } from '../components/my-sheet/my-sheet.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MySheetUplistsComponent } from '../components/my-sheet-uplists/my-sheet-uplists.component';

@Component({
	selector: 'app-up-lists',
	templateUrl: './up-lists.component.html',
	styleUrls: [ './up-lists.component.scss' ]
})
export class UpListsComponent implements OnInit {
	// tslint:disable-next-line: no-use-before-declare
	dataSource = new MatTableDataSource<UpLists>([]);
	id: string;
	uplists: UpLists;

	displayedColumns: string[] = [
		'ListID',
		'CustomerID',
		'info',
		'AllRecords',
		'SuccessRecords',
		'department',
		'Date',
		'add_date',
		'Last_attempt_date',
		'lock_call',
		'call_status',
		'call_duration',
		'actions'
	];

	selectedDepartment: UpLists;

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;

	formGroup: FormGroup;
	constructor(
		private UpListsService: UplistsService,
		private snackbar: MatSnackBar,
		private router: ActivatedRoute,
		private buttomSheet: MatBottomSheet
	) {
		this.UpListsService.list().subscribe((response) => {
			this.dataSource.data = response.Result;

			this.formGroup = new FormGroup({
				ListID: new FormControl('1', [ Validators.required ]),
				AllRecords: new FormControl('1', [ Validators.required ]),
				SuccessRecords: new FormControl('1', [ Validators.required ]),
				Date: new FormControl('', [ Validators.required ]),
				actions: new FormControl('', [ Validators.required ]),
				CustomerID: new FormControl('', [ Validators.required ]),
				department: new FormControl(''),
				add_date: new FormControl(''),
				Last_attempt_date: new FormControl(''),
				lock_call: new FormControl(''),
				call_status: new FormControl(''),
				call_duration: new FormControl(''),
				info: new FormControl('')
			});
		});
	}

	openBottomSheet(uplists: UpLists) {
		this.buttomSheet.open(MySheetUplistsComponent, {
			data: {
				uplists
			}
		});
	}

	remove(item: UpLists) {
		debugger;
		this.UpListsService.remove(item.ID).subscribe((res) => {});
		debugger;
		this.snackbar.open('رکورد مورد نظر حذف شد', null, { duration: 999 });
		return;
	}

	// refresh(item: UpLists) {
	//   this.UpListsService.refresh(item.ID).subscribe(res => {});
	// }

	onselect(id: number) {
		console.log(id);
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}
