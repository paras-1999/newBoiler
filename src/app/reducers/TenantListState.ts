import { actionTenantList } from "../../types";

const setTenantList = (state = { list: [], count: 0 }, action: actionTenantList) => {
	switch (action.type) {
		case "getTenants":
			return action.payload;
		default:
			return state;
	}
};
export default setTenantList;
