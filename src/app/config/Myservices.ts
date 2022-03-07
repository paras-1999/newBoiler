import { URL } from "./URL";
import axios from "axios";
import { ITenantData } from "../types";

export function getUserData(email: string, password: string) {
	const data = { email, password };
	return axios.post(`${URL}/api/login`, data);
}

export function deleteTenantData(id: number) {
	return axios.delete(`${URL}/api/user/${id}`);
}

export function updateTenantData(id: number, data: ITenantData) {
	return axios.put(`${URL}/api/user/${id}`, data);
}

export function addTenantData(data: ITenantData) {
	return axios.post(`${URL}/api/user`, data);
}

export function tenantListService(currentPage: number, search: string) {
	return axios.get(`${URL}/api/user?type=tenant&_page=${currentPage}&name_like=${search}`);
}
export function tenantUserListService(currentPage: number, search: string) {
	return axios.get(`${URL}/api/tenant-user?_page=${currentPage}&name_like=${search}`);
}
