import axios from "@/core/axios";

export const getInfo = async () => {
	return (await axios.get(axios.defaults.baseURL + '/users/me')).data;
}