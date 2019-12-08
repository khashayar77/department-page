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
		RetryTime: 'مدت زمان وقفه برای تماس مجدد',
		info: 'کارشناسی که با مشترک صحبت کرده است',
		Priority: 'اولویت',
		Name: 'نام ',
		Unit: 'واحد سازمانی',
		StartWorkingTime: 'زمان شروع تماس با مشترکین',
		EndWorkingTime: 'زمان پایان تماس با مشترکین',
		Queue: 'نام صف',
		QueryMethod: 'شماره استراتژی برقراری تماس با مشترکین',
		CallMore: 'تعداد دفعات مجاز برای تماس مجدد',
		action: 'مشاهده جزییات',
		ListID: 'کد لیست',
		AllRecords: 'اطلاعات تمام رکورد ها',
		SuccessRecords: 'تماس های موفقیت آمیز',
		numberOfDailed: '',
		CustomerId: 'کد اشتراک',
		add_date: 'تاریخ آپلود شماره',
		Date: 'تاریخ',
		lock_call: 'تماس های مانده در انتظار',
		Call_Status: 'وضعیت تماس ها',
		CallDurationLimit: 'حداقل زمان مکالمه برای موفق بودن بر قراری تماس',
		Last_attempt_date: 'تاریخ آخرین تلاش برای برقرای تماس مجدد',
		call_status: 'وضعیت تماس گرفته شده',
		Id: 'شناسه هر لیست',
		OperatorName: 'نام اپراتور',
		Description: 'توضیحات مورد نطر برای  هر لیست ',
		IssueDate: 'تاریخ درج شده',
		actions: 'ویرایش اطلاعات',
		Enable: 'وضعیت',
		PhoneNumber: 'شماره تلفن',
		DepartmentName: 'نام دپارتمان مورد نظر',
		AddDate: 'تاریخ آپلود شماره تلفن',
		LastAttemptDate: 'تاریخ آخرین تلاش برای برقراری تماس',
		LockCall: 'تماس های مانده در انتظار',
		Attempt: '',
		CallStatus: 'وضعیت تماس',
		CallDuration: 'مدت زمان مکامله با مشترکین',
		Info1: 'کارشناس در حال استفاده از پنل',
		info2: 'شماره داخلی کارشناس',
		info3: 'وضعیت ثبت در سامانه crm',
		NoneWorkingDayTableId: 'شناسه روز های غیرکاری',
		UrlId: 'شناسه مخزن آپلود تماس ها',
		delete: 'حذف'
	};
}
