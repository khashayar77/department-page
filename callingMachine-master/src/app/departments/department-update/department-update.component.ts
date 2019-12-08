import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { DepartmentService } from 'src/app/services/department.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Department } from 'src/app/interfaces/department.interface';
import enability_options from 'src/app/enums/enability-options.enum';
import { StrategyService } from 'src/app/services/strategy.service';
import { Observable } from 'rxjs';
import { QueryMethod } from 'src/app/models';

@Component({
	selector: 'app-department-update',
	templateUrl: './department-update.component.html',
	styleUrls: ['./department-update.component.scss']
})
export class DepartmentUpdateComponent implements OnInit {
	enability_options: number[] = enability_options;
	formGroup: FormGroup;
	id: string;
	department: Department;
	query_methods$: Observable<QueryMethod[]>;

	constructor(
		private snackbar: MatSnackBar,
		private departmentService: DepartmentService,
		private strategyService: StrategyService,
		private router: ActivatedRoute,
		private bottomSheetRef: MatBottomSheetRef<DepartmentUpdateComponent>,
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: { department: Department }
	) {
		this.create_formGroup();
		this.query_methods$ = this.strategyService.list();
		if (data) {
			this.department = this.data.department;
			this.id = this.department.Id;
			this.formGroup.patchValue(this.department);
		}
	}

	private create_formGroup() {
		this.formGroup = new FormGroup({
			Enable: new FormControl(),
			Priority: new FormControl(''),
			StartWorkingTime: new FormControl(''),
			EndWorkingTime: new FormControl(''),
			QueryMethod: new FormControl(''),
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
		}
		this.departmentService.update({ ...this.department, ...this.formGroup.value }).subscribe(department => {
			this.snackbar.open('اطلاعات  ثبت شد', null, { duration: 999 });
			this.bottomSheetRef.dismiss(department);
		})
	}
	cancel() {
		this.bottomSheetRef.dismiss();
	}
}
