import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CallRequest } from '../interfaces/call-request.interface';
import { MatTableDataSource } from '@angular/material';
import { CallingService } from '../services/calling.service';
import { MatSnackBar } from '@angular/material';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MySheetCallingListComponent } from '../components/my-sheet-calling-list/my-sheet-calling-list.component';
import { Department } from '../interfaces/department.interface';
import { Observable } from 'rxjs';
import { DepartmentService, UplistsService, Descriptionservice } from '../services';
import { CallResult } from '../interfaces/CallResult';
import { UpLists } from '../interfaces/UpLists';


export interface Num {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-calling-lists',
  templateUrl: './calling-lists.component.html',
  styleUrls: ['./calling-lists.component.scss']
})
export class CallingListsComponent {
  callStatusList: number[] = [0, 1];
  departmets$: Observable<Department[]>;
  uploads_list$: Observable<UpLists[]>;
  current_page: number;
  total: number;

  displayedColumns: string[];
  // @ViewChild(MatPaginator, { static: true })
  // paginator: MatPaginator;
  dataSource = new MatTableDataSource<CallRequest>([]);
  // pageNo: number;
  // Total: number;

  descriptions: { [key: string]: string };

  constructor(
    private callingService: CallingService,
    private departmentService: DepartmentService,
    private uplistsService: UplistsService,
    private matSnackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private descriptionservice: Descriptionservice
  ) {
    this.departmets$ = this.departmentService.list();
    this.uploads_list$ = this.uplistsService.list();
    this.descriptions = this.descriptionservice.description;
    this.displayedColumns = ['CustomerId', 'PhoneNumber', 'ListNumberId', 'UrlId', 'action'];
    this.current_page = 0;
    this.search();

  }
  filterForm = new FormGroup({
    Number: new FormControl(null),
    CustomerId: new FormControl(null),
    Department: new FormControl(null),
    NumbersList: new FormControl(null),
    CallStatus: new FormControl(null)
  });


  openBottomSheet(PhoneNumber: string) {
    const bs_ref = this.bottomSheet.open(MySheetCallingListComponent, {
      data: {
        PhoneNumber
      }
    });

    // this.getList();
  }

  // pageChanged(event: PageEvent) {
  // 	this.getList(event.pageIndex, event.pageSize);
  // }



  remove(item: CallRequest) {
    this.callingService.remove(item.Id).subscribe((res) => {
      this.matSnackBar.open('رکورد مورد نظر حذف شد', null, { duration: 999 });
      this.search();
    });
  }



  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
  // }





  search() {
    this.callingService
      .query({
        criteria: this.filterForm.value,
        pageNo: this.current_page
      })
      .subscribe((res) => {
        this.dataSource.data = res;
        this.current_page = 1;
        this.total = 100;
      });
  }
}
