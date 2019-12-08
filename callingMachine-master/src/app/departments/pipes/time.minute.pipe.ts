import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeMinute' })
export class timeMinutePipe implements PipeTransform {
	transform(value: number | string): string {
		return '{{value}}دقیقه';
	}
}
