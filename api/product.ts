import axios from "@/core/axios";
import { UpdateProductDTO } from "@/store/types/product.types";

export const findAll = async (searchTerm?: string, sort?: string) => {
	if (searchTerm !== undefined && searchTerm !== '')
		return (await axios.get(axios.defaults.baseURL + '/products?' + `searchTerm=${searchTerm}`)).data;
	return (await axios.get(axios.defaults.baseURL + '/products')).data;
}

export const findOne = async (id: number) => {
	return (await axios.get(axios.defaults.baseURL + `/products/${id}`)).data;
}

export const update = async (id: number, data: UpdateProductDTO) => {
	return (await axios.put(axios.defaults.baseURL + `/products/${id}`, data)).status;
}