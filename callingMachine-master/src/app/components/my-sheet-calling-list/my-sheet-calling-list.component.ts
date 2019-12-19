import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { CallingService } from 'src/app/services/calling.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CallResult } from 'src/app/interfaces/CallResult';
import { CallingListsComponent } from 'src/app/calling-lists/calling-lists.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-sheet-calling-list',
  templateUrl: './my-sheet-calling-list.component.html',
  styleUrls: ['./my-sheet-calling-list.component.scss']
})
export class MySheetCallingListComponent implements OnInit {
  callResult: CallResult;

  constructor(
    private router: ActivatedRoute,
    private callingService: CallingService,
    private bottomSheetRef: MatBottomSheetRef<CallingListsComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { PhoneNumber: string }
  ) { }

  ngOnInit() {
    this.mock();
    this.callingService.getResult(this.data.PhoneNumber).subscribe((callResult) => {
      this.callResult = callResult;
    });
  }

  private mock() {
    this.callResult = {
      CustomerId: '5421415001',
      PhoneNumber: '09981007104',
      DepartmentName: 'qm-ms',
      UrlId: '10',
      AddDate: '10.10.1398',
      LastAttemptDate: '10.11.1398',
      RetryTime: '10',
      LockCall: '102',
      Attempt: '3',
      CallStatus: '0',
      PickUp: '1',
      CallDuration: '120',
      Info1: 'string',
      info2: 'string',
      info3: 'string'
    };
  }

  cancel() {
    this.bottomSheetRef.dismiss();
  }
}
