import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UpLists } from '../interfaces/UpLists';
import { UplistsService } from '../services/uplists.service';
import { MatSnackBar } from '@angular/material';
import { pluck } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-up-lists',
	templateUrl: './up-lists.component.html',
	styleUrls: [ './up-lists.component.scss' ]
})
export class UpListsComponent implements OnInit {
	// tslint:disable-next-line: no-use-before-declare
	dataSource = new MatTableDataSource<UpLists>([]);
	id: string;

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

	constructor(private UpListsService: UplistsService, private snackbar: MatSnackBar, private router: ActivatedRoute) {
		this.UpListsService.list().subscribe((response) => {
			this.dataSource.data = response.Result;
		});
	}

	remove(item: UpLists) {
		debugger;
		this.UpListsService.remove(item.ID).subscribe((res) => {});
		debugger;
		this.snackbar.open('رکورد مورد نظر حذف شد', null, { duration: 999 });
		return;
	}

	refresh(item: UpLists) {
		this.UpListsService.refresh(item.ID).subscribe((res) => {});
	}

	onselect(id: number) {
		console.log(id);
		return id;
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}
