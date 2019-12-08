import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallingService } from 'src/app/services/calling.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CallingListsComponent } from 'src/app/calling-lists/calling-lists.component';
import { CallResult } from 'src/app/interfaces/CallResult';
@Component({
	selector: 'app-my-sheet-calling-list',
	templateUrl: './my-sheet-calling-list.component.html',
	styleUrls: [ './my-sheet-calling-list.component.scss' ]
})
export class MySheetCallingListComponent implements OnInit {
	constructor(
		private callingService: CallingService,
		private router: ActivatedRoute,
		private snackbar: MatSnackBar,
		private CallingService: CallingService,
		private bottomSheetRef: MatBottomSheetRef<CallingListsComponent>,
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: { callRequest: CallResult }
	) {
		this.create_formGroup();
		if (data) {
			this.callRequest = this.data.callRequest;
			this.formGroup.patchValue(this.callRequest);
		}
	}

	formGroup: FormGroup;
	id: string;
	callRequest: CallResult;

	private create_formGroup() {
		this.formGroup = new FormGroup({
			ID: new FormControl('1', [ Validators.required ]),
			customerID: new FormControl('', [ Validators.required ]),
			uniqeID: new FormControl(''),
			qID: new FormControl(''),
			Number: new FormControl(''),
			Department: new FormControl(''),
			UrlId: new FormControl(''),
			Add_Date: new FormControl(''),
			Retry_Time: new FormControl(''),
			Lock_call: new FormControl(''),
			Attempt: new FormControl(''),
			Call_Status: new FormControl(''),
			CallDurationLimit: new FormControl(''),
			Info1: new FormControl(''),
			Info3: new FormControl('')
		});
	}

	ngOnInit(): void {
		// throw new Error('Method not implemented.');
	}

	cancel() {
		this.bottomSheetRef.dismiss();
	}

	edit(): void {
		if (this.formGroup.invalid) {
			this.snackbar.open('اطلاعات ثبت شد', null, { duration: 999 });
		}

		// this.callingService.updated(this.id, this.formGroup.value).subscribe((resp ) => {
		//   this.snackbar.open('اطلاعات ثبت شد', null, { duration: 999 });
		//   this.formGroup.patchValue(resp);
		// });
	}
}
