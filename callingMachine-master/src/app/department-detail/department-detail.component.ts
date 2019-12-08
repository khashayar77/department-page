import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { DepartmentService } from '../services/department.service';

export interface Num {
	value: string;
	viewValue: string;
}
@Component({
	selector: 'app-department-detail',
	templateUrl: './department-detail.component.html',
	styleUrls: [ './department-detail.component.scss' ]
})
export class DepartmentDetailComponent implements OnInit {
	num: Num[] = [ { value: '0', viewValue: '0' }, { value: '1', viewValue: '1' } ];
	formGroup: FormGroup;
	id: string;

	constructor(
		private snackbar: MatSnackBar,
		private departmentService: DepartmentService,
		private router: ActivatedRoute
	) {
		this.formGroup = new FormGroup({
			id: new FormControl('1', [ Validators.required ]),
			info: new FormControl('1', [ Validators.required ]),
			enable: new FormControl('1', [ Validators.required ]),
			Priority: new FormControl('', [ Validators.required ]),
			Unit: new FormControl({ value: '', disabled: true }),
			department: new FormControl('', [ Validators.required ]),
			StartWorkingTime: new FormControl('', [ Validators.required ]),
			EndWorkingTime: new FormControl(''),
			nwd_table_id: new FormControl({ value: '', disabled: true }),
			Queue: new FormControl(''),
			UrlId: new FormControl(''),
			QueryMethod: new FormControl(''),
			CallMore: new FormControl(''),
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

		// this.departmentService.update(this.id, this.formGroup.value).subscribe((resp) => {
		// 	this.snackbar.open('اطلاعات ثبت شد ', null, { duration: 999 });
		// 	this.formGroup.patchValue(resp);
		// });
	}
}
