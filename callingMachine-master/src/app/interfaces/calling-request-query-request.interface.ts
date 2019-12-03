export interface CallingRequestQueryRequest {
	criteria: {
		CustomerId?: number;
		Number?: number;
		Department?: string;
		addDate?: Date;
		callStatus?: number;
	};
	sortBy?: string;
	pageNo: number;
}
