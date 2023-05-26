import axios from "axios";
import { OrderDTO, OrderResponseDTO } from "./dto/order.dto"

export const placeOrder = async (dto: OrderDTO): Promise<OrderResponseDTO> => {
	dto.status = 'PENDING';
	console.log(dto)
	return (await axios.post(axios.defaults.baseURL + '/orders', dto)).data;
}