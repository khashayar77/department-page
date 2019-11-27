import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallingService } from 'src/app/services/calling.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-my-sheet-calling-list',
	templateUrl: './my-sheet-calling-list.component.html',
	styleUrls: [ './my-sheet-calling-list.component.scss' ]
})
export class MySheetCallingListComponent implements OnInit {
	buuttomSheetRef: any;
	formGroup: FormGroup;
	id: string;

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

	constructor(private callingService: CallingService, private router: ActivatedRoute, private snackbar: MatSnackBar) {
		this.formGroup = new FormGroup({
			ID: new FormControl('1', [ Validators.required ]),
			customerID: new FormControl('123', [ Validators.required ]),
			uniqeID: new FormControl('', [ Validators.required ]),
			qID: new FormControl('', [ Validators.required ]),
			Number: new FormControl('', [ Validators.required ]),
			Department: new FormControl(''),
			Url_ID: new FormControl(''),
			Add_Date: new FormControl(''),
			Retry_Time: new FormControl(''),
			Lock_call: new FormControl(''),
			Attempt: new FormControl(''),
			Call_Status: new FormControl(''),
			Call_Duration: new FormControl(''),
			Info1: new FormControl(''),
			Info3: new FormControl('')
		});
	}

	edit(): void {
		if (this.formGroup.invalid) {
			this.snackbar.open('اطلاعات کامل نیست', null, { duration: 999 });
		}

		// this.callingService.updated(this.id, this.formGroup.value).subscribe((resp ) => {
		//   this.snackbar.open('اطلاعات ثبت شد', null, { duration: 999 });
		//   this.formGroup.patchValue(resp);
		// });
	}

	cancel() {
		this.buuttomSheetRef.dismiss();
	}
}
