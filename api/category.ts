import axios from "@/core/axios";
import { CategoryDTO, CreateCategoryResponseDTO, GetCategoryResponse } from "./dto/category.dto";

export const create = async (data: CategoryDTO): Promise<CreateCategoryResponseDTO> => {
	return ((await axios.post(axios.defaults.baseURL + `/category`, data)).data);
}

export const getAll = async (): Promise<GetCategoryResponse> => {
	return ((await axios.get(axios.defaults.baseURL + `/category`)).data)
}