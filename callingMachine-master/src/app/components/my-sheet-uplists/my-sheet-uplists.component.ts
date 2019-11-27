import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UplistsService } from 'src/app/services/uplists.service';
import { MatSnackBar, MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { UpLists } from 'src/app/interfaces/UpLists';
import { UpListsComponent } from 'src/app/up-lists/up-lists.component';

@Component({
	selector: 'app-my-sheet-uplists',
	templateUrl: './my-sheet-uplists.component.html',
	styleUrls: [ './my-sheet-uplists.component.scss' ]
})
export class MySheetUplistsComponent implements OnInit {
	constructor(
		private uplistsService: UplistsService,
		private router: ActivatedRoute,
		private snackbar: MatSnackBar,
		private bottomSheetRef: MatBottomSheetRef<UpListsComponent>,
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: { uplists: UpLists }
	) {
		this.create_formGroup();
		if (data) {
			this.uplists = this.data.uplists;
			this.formGroup.patchValue(this.uplists);
		}
	}

	formGroup: FormGroup;
	id: string;
	uplists: UpLists;
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

	private create_formGroup() {
		this.formGroup = new FormGroup({
			ListID: new FormControl('1', [ Validators.required ]),
			AllRecords: new FormControl('1'),
			SuccessRecords: new FormControl('1'),
			Date: new FormControl(''),
			actions: new FormControl(''),
			CustomerID: new FormControl(''),
			department: new FormControl(''),
			add_date: new FormControl(''),
			Last_attempt_date: new FormControl(''),
			lock_call: new FormControl(''),
			call_status: new FormControl(''),
			call_duration: new FormControl(''),
			info: new FormControl('')
		});
	}

	cancel() {
		this.bottomSheetRef.dismiss();
	}

	// ngOnInit() {
	// 	this.router.params.pipe(pluck('id')).subscribe((id) => {
	// 		if (id) {
	// 			this.id = id;
	// 			this.uplistsService.get(id).subscribe((uplists: { [key: string]: any }) => {
	// 				this.uplists = this.data.uplists;
	// 				this.formGroup.patchValue(uplists);
	// 			});
	// 		}
	// 	});
	// }

	update(): void {
		if (this.formGroup.invalid) {
			this.snackbar.open(' اطلاعات کامل نیست', null, { duration: 999 });
			return;
		}

		// this.uplistsService.update(this.id, this.formGroup.value).subscribe((department: { [key: string]: any }) => {
		// 	this.snackbar.open('اطلاعات ثبت شد ', null, { duration: 999 });
		// 	this.formGroup.patchValue(department);
		// 	this.bottomSheetRef.dismiss(department);
		// });
	}
}
