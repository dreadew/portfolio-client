import axios from "axios";
import { FileDTO } from "./dto/file.dto";

export const getFile = async (filename: string) => {
	const res = (await axios.get(axios.defaults.baseURL + `/files/` + filename));
	return res;
}