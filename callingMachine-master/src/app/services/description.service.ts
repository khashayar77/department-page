import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, map } from 'rxjs/operators';
import { throwError, Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { MOCK_admin_user, MOCK_operator_user } from '../mocks/roles';
import { User } from '../datamodels';
import { JsonPipe } from '@angular/common';

const LOCAL_STORAGE_KEY = 'user';

@Injectable({
	providedIn: 'root'
})
export class Descriptionservice {
	description: { [key: string]: string } = {
		retry_time: 'مدت زمان وقفه ...',
		info: 'کارشناسی که با مشترک صحبت کرده است',
		Priority: 'اولویت',
		Name: 'نام ',
		Unit: 'واحد سازمانی',
		StartWorkingTime: 'زمان شروع تماس با کاربران',
		EndWorkingTime: 'زمان پایان تماس با کاربران',
		Queue: 'نام صف',
		status: 'وضعیت دپارتمان',
		QueryMethod: 'استراتژی برقراری تماس با کاربران',
		CallMore: 'تعداد دفعات تماس مجدد',
		action: 'مشاهده جزییات',
		ListID: 'کد لیست',
		AllRecords: 'اطلاعات تمام رکورد ها',
		SuccessRecords: 'تماس های موفقیت آمیز',
		numberOfDailed: '',
		CustomerID: 'کد اشتراک',
		add_date: 'تاریخ آپلود شماره',
		Date: 'تاریخ',
		lock_call: 'تماس های مانده در انتظار',
		Call_Status: 'وضعیت تماس ها',
		CallDurationLimit: 'مدت زمان مکالمه',
		Last_attempt_date: 'تاریخ آخرین تلاش برای برقرای تماس مجدد',
		call_status: 'وضعیت تماس گرفته شده',
		Id: 'شناسه هر لیست',
		OperatorName: 'نام اپراتور',
		Description: 'توضیحات مورد نطر برای  هر لیست ',
		IssueDate: 'تاریخ درج شده',
		actions: 'ویرایش اطلاعات',
		Enable: 'وضعیت'
	};
}
