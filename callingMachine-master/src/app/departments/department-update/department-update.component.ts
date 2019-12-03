import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { DepartmentService } from 'src/app/services/department.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Department } from 'src/app/interfaces/department.interface';

@Component({
	selector: 'app-department-update',
	templateUrl: './department-update.component.html',
	styleUrls: [ './department-update.component.scss' ]
})
export class DepartmentUpdateComponent implements OnInit {
	num: number[] = [ 1, 2 ];
	formGroup: FormGroup;
	id: string;
	department: Department;

	constructor(
		private snackbar: MatSnackBar,
		private departmentService: DepartmentService,
		private router: ActivatedRoute,
		private bottomSheetRef: MatBottomSheetRef<DepartmentUpdateComponent>,
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: { department: Department }
	) {
		this.create_formGroup();
		if (data) {
			this.department = this.data.department;
			this.id = this.department.Id;
			this.formGroup.patchValue(this.department);
		}
	}

	private create_formGroup() {
		this.formGroup = new FormGroup({
			Id: new FormControl('', [ Validators.required ]),
			Name: new FormControl({ value: '', disabled: true }),

			Unit: new FormControl({ value: '', disabled: true }),
			Enable: new FormControl(),

			Priority: new FormControl(''),
			StartWorkingTime: new FormControl(''),

			EndWorkingTime: new FormControl(''),
			NoneWorkingDayTableId: new FormControl(''),

			Queue: new FormControl({ value: '', disabled: true }),
			QueryMethod: new FormControl(''),

			UrlId: new FormControl(''),
			CallMore: new FormControl(''),

			RetryTime: new FormControl(''),
			CallDurationLimit: new FormControl('')
		});
	}

	ngOnInit() {
		this.router.params.pipe(pluck('id')).subscribe((id) => {
			if (id) {
				this.id = id;
				this.departmentService.get(id).subscribe((department) => {
					this.department = this.data.department;
					this.formGroup.patchValue(department);
				});
			}
		});
	}

	update(): void {
		if (this.formGroup.invalid) {
			this.snackbar.open(' اطلاعات کامل نیست', null, { duration: 999 });
		} else if (this.formGroup.valid) {
			this.snackbar.open('اطلاعات  ثبت شد', null, { duration: 999 });
		}
	}
	cancel() {
		this.bottomSheetRef.dismiss();
	}
}
