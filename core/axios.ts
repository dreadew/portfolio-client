import axios from "axios";
import { parseCookies } from "nookies";

let cancelTokenSource = axios.CancelToken.source();

axios.defaults.baseURL = "http://45.12.74.211:7777";

//axios.defaults.baseURL = "http://localhost:7777";

axios.interceptors.request.use(config => {
	if (typeof window !== "undefined") {
		const { _token } = parseCookies();

		config.headers.Authorization = "Bearer " + _token;
	}
	config.cancelToken = cancelTokenSource.token;
	return config;
});

export default axios;