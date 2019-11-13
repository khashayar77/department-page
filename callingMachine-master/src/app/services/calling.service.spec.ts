import { TestBed } from '@angular/core/testing';

import { CallingService } from './calling.service';
import { HttpClientModule } from '@angular/common/http';

describe('CallingService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [ HttpClientModule ]
		})
	);

	it('should be created', () => {
		const service: CallingService = TestBed.get(CallingService);
		expect(service).toBeTruthy();
	});
});
