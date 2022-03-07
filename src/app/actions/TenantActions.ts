import { tenantListService, tenantUserListService } from "../../config/Myservices";

export const getTenantList = async (currentPage: number, search: string) => {
	let res = await tenantListService(currentPage, search);
	// console.log(res);
	return {
		type: "getTenants",
		payload: { ...res.data },
	};
};
export const getTenantUserList = async (currentPage: number, search: string) => {
	let res = await tenantUserListService(currentPage, search);
	console.log(res);
	return {
		type: "getTenantUser",
		payload: { ...res.data },
	};
};
