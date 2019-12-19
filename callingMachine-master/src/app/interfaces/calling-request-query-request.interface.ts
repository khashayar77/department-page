export interface CallingRequestQueryRequest {
	criteria: {
		Number?: string;
		CustomerId?: string;
		Department?: string;
		NumbersList?: string;
		CallStatus?: string;
	};
	sortBy?: string;
	pageNo: number;
}
