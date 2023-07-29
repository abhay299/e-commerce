import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		console.log(res);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		console.log(err);
		dispatch(loginFailure(err.response.data.message));
	}
};