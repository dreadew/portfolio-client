import axios from "@/core/axios";
import { CreateProductDTO, UpdateProductDTO } from "@/store/types/product.types";

export const findAll = async (searchTerm?: string, sort?: string) => {
	if (searchTerm !== undefined && searchTerm !== '')
		return (await axios.get(axios.defaults.baseURL + '/products?' + `searchTerm=${searchTerm}`)).data;
	return (await axios.get(axios.defaults.baseURL + '/products')).data;
}

export const findOne = async (id: number) => {
	return (await axios.get(axios.defaults.baseURL + `/products/${id}`)).data;
}

export const deleteById = async (id: number) => {
	return (await axios.delete(axios.defaults.baseURL + `/products/${id}`)).data;
}

export const update = async (id: number, data: UpdateProductDTO) => {
	return (await axios.put(axios.defaults.baseURL + `/products/${id}`, data, {headers: {
		'Content-Type': 'multipart/form-data'
	}}));
}

export const create = async (data: CreateProductDTO) => {
	return (await axios.post(axios.defaults.baseURL + `/products`, data, {headers: {
		'Content-Type': 'multipart/form-data'
	}}));
}