import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UplistsService } from 'src/app/services/uplists.service';
import { MatSnackBar, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { UpLists } from 'src/app/interfaces/UpLists';
// import { MatDatepicker } from '@angular/material/datepicker';

@Component({
	selector: 'app-my-sheet-uplists',
	templateUrl: './my-sheet-uplists.component.html',
	styleUrls: [ './my-sheet-uplists.component.scss' ]
})
export class MySheetUplistsComponent implements OnInit {
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
	formGroup: FormGroup;
	id: string;
	uplists: UpLists;

	constructor(
		private UplistsService: UplistsService,
		private router: ActivatedRoute,
		private snackbar: MatSnackBar,
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: { uplists: UpLists }
	) {
		this.create_formGroup();
		this.uplists = this.data.uplists;
		this.formGroup.patchValue(this.uplists);
	}

	//   ngOnInit() {
	//     this.router.params.pipe(pluck('id')).subscribe((id) => {
	// 			this.id = id;
	// 			this.UplistsService.get(id).subscribe((resp) => {
	// 				this.formGroup.patchValue(resp);
	//   });
	// });

	private create_formGroup() {
		this.formGroup = new FormGroup({
			ListID: new FormControl('1', [ Validators.required ]),
			AllRecords: new FormControl('1', [ Validators.required ]),
			SuccessRecords: new FormControl('1', [ Validators.required ]),
			Date: new FormControl('', [ Validators.required ]),
			actions: new FormControl('', [ Validators.required ]),
			CustomerID: new FormControl('', [ Validators.required ]),
			department: new FormControl('', [ Validators.required ]),
			add_date: new FormControl('', [ Validators.required ]),
			Last_attempt_date: new FormControl('', [ Validators.required ]),
			lock_call: new FormControl('', [ Validators.required ]),
			call_status: new FormControl('', [ Validators.required ]),
			call_duration: new FormControl('', [ Validators.required ]),
			info: new FormControl('', [ Validators.required ])
		});
	}

	edit(): void {
		if (this.formGroup.invalid) {
			this.snackbar.open('اطلاعات کامل است', null, { duration: 999 });
		}
	}

	// // this.UplistsService.update(this.id, this.formGroup.value).subscribe((resp) => {
	// //   this.snackbar.open('اطلاعات ثبت شد ', null, { duration: 999 });
	// //   this.formGroup.patchValue(resp);
	// // });
	// }
}
