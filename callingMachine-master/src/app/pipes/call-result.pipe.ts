import { Pipe, PipeTransform } from '@angular/core';

const dictionatry = {
	0: 'ناموفق',
	1: 'موفق'
};

@Pipe({ name: 'callResult' })
export class CallResultPipe implements PipeTransform {
	transform(result: number | string): string {
		return dictionatry[result];
	}
}
