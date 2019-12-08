import { Pipe, PipeTransform } from '@angular/core';

const dictionatry = {
	0: 'فعال',
	1: 'غیر فعال'
};

@Pipe({ name: 'activationStatus' })
export class ActivationStatusPipe implements PipeTransform {
	transform(state: number | string): string {
		return dictionatry[state];
	}
}
