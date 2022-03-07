export interface IHeadings {
	title: string;
	className?: string;
}
export interface ITenantData {
	name: string;
	description: string;
	userid: string;
	email: string;
	password?: string;
	type: string;
	id?: number;
}

export interface IActionsRenderList {
	className?: string;
	iconClassName?: string;
	buttonFunction?: (val: ITenantData) => void;
}
export interface ITenantDataList {
	list: ITenantData[];
	fields: string[];
}

export interface ISetTenantList {
	list: ITenantData[];
	count: number;
}

export interface IErrorInput {
	name: boolean;
	userid: boolean;
	email: boolean;
	no: boolean;
}

////actions

export interface actionTenantList {
	type: string;
	payload: ISetTenantList;
}
