import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

export interface Num {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-add-departments',
	templateUrl: './add-departments.component.html',
	styleUrls: [ './add-departments.component.scss' ]
})
export class AddDepartmentsComponent {
	num: Num[] = [ { value: '1', viewValue: '1' }, { value: '2', viewValue: '2' } ];

	formGroup: FormGroup;
	constructor(private snackbar: MatSnackBar) {
		this.formGroup = new FormGroup({
			enable: new FormControl('1', [ Validators.required ]),
			Priority: new FormControl('', [ Validators.required ]),
			department: new FormControl('', [ Validators.required ]),
			StartWorkingTime: new FormControl(''),
			EndWorkingTime: new FormControl(''),
			nwd_table_id: new FormControl({ value: '', disabled: true }),
			Queue: new FormControl(''),
			UrlId: new FormControl(''),
			QueryMethod: new FormControl(''),
			CallMore: new FormControl(''),
			retry_time: new FormControl('')
		});
	}
	edit() {
		if (this.formGroup.invalid) {
			return this.snackbar.open(' اطلاعات کامل نیست', null, { duration: 999 });
		}

		return this.snackbar.open('اطلاعات ثبت شد ', null, { duration: 999 });
	}
}
