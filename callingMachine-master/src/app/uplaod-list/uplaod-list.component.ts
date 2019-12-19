import { Component, EventEmitter, OnInit } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { stringify } from 'querystring';
import { UploaderService } from '../services/uploader.service';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-uplaod-list',
	templateUrl: './uplaod-list.component.html',
	styleUrls: [ './uplaod-list.component.scss' ]
})
export class UplaodListComponent {
	selectedFile: File = null;
	fd = new FormData();
	progress$ = new BehaviorSubject<number>(0);
	// tslint:disable-next-line: variable-name
	progress_color: 'primary' | 'warn' = 'primary';
	uploading: boolean;
	statics: {
		DepartmentName: string;
		FailedNumber: number;
		SuccessNumber: number;
	};

	constructor(private snackbar: MatSnackBar, private uploaderService: UploaderService) {
		this.fd.append('file', '');
		this.uploading = false;
	}

	createFormData(event) {
		debugger;
		this.selectedFile = event.target.files[0] as File;
		this.fd.delete('file');
		this.fd.append('file', this.selectedFile, this.selectedFile.name);

		const reader = new FileReader();
		reader.onload = (e: any) => {};
		reader.readAsDataURL(this.selectedFile);
		this.upload(this.fd);
	}

	open_file_selector() {
		(document.querySelector('#file-selector') as HTMLInputElement).click();
	}

	upload(fd) {
		this.uploading = true;
		this.progress_color = 'primary';
		this.uploaderService.upload(fd).subscribe((uploader) => {
			if (uploader.status === 'done') {
				this.progress_color = 'primary';
				debugger;
				this.statics = uploader.body;
				this.progress$.next(uploader.progress);
				this.uploading = false;
			} else if (uploader.status === 'progress') {
				this.progress_color = 'primary';
				this.progress$.next(uploader.progress);
			} else if (uploader.status === 'failed') {
				this.progress_color = 'warn';
				this.progress$.next(uploader.progress);
			} else {
				debugger;
			}
			// this.uploadResponse.message = image.message;

			// this.sb.open('رسانه با موفقیت آپلود شد', null, { duration: 4999 });
			// if (image.verified) this.medias.push(image);
			// else this.verification_needed_medias.push(image);
		});
	}

	uploader() {}
}
