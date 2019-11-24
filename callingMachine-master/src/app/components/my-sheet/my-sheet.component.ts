import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { DepartmentService } from 'src/app/services/department.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Department } from 'src/app/interfaces/department';

export interface Num {
	value: string;
	viewValue: string;
}
@Component({
	selector: 'app-my-sheet',
	templateUrl: './my-sheet.component.html',
	styleUrls: [ './my-sheet.component.scss' ]
})
export class MySheetComponent implements OnInit {
	num: Num[] = [ { value: '0', viewValue: '0' }, { value: '1', viewValue: '1' } ];
	formGroup: FormGroup;
	id: string;
	department: Department;
	constructor(
		private snackbar: MatSnackBar,
		private departmentService: DepartmentService,
		private router: ActivatedRoute,
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: { department: Department }
	) {
		debugger;
		this.create_formGroup();
		this.department = this.data.department;
		this.formGroup.patchValue(this.department);
	}

	private create_formGroup() {
		this.formGroup = new FormGroup({
			id: new FormControl('1', [ Validators.required ]),
			info: new FormControl('1', [ Validators.required ]),
			enable: new FormControl('1', [ Validators.required ]),
			priority: new FormControl('', [ Validators.required ]),
			Unit: new FormControl({ value: '', disabled: true }),
			department: new FormControl('', [ Validators.required ]),
			start_working_time: new FormControl('', [ Validators.required ]),
			end_working_time: new FormControl(''),
			nwd_table_id: new FormControl({ value: '', disabled: true }),
			queue: new FormControl(''),
			url_id: new FormControl(''),
			query_method: new FormControl(''),
			call_more: new FormControl(''),
			retry_time: new FormControl('')
		});
	}

	ngOnInit() {
		this.router.params.pipe(pluck('id')).subscribe((id) => {
			this.id = id;
			this.departmentService.get(id).subscribe((resp) => {
				this.formGroup.patchValue(resp);
			});
		});
	}

	edit(): void {
		if (this.formGroup.invalid) {
			this.snackbar.open(' اطلاعات کامل نیست', null, { duration: 999 });
			return;
		}

		this.departmentService.update(this.id, this.formGroup.value).subscribe((resp) => {
			this.snackbar.open('اطلاعات ثبت شد ', null, { duration: 999 });
			this.formGroup.patchValue(resp);
		});
	}
}
