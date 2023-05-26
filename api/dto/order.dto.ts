import { OrderItemDTO } from "@/store/types/order.types"

export interface OrderResponseDTO {
  order: OrderDTO;
}

export type OrderItemDTO2 = {
  quantity: number,
  price: number,
  productId: number
}

export type OrderDTO = {
	items: OrderItemDTO[],
	status: string
}

export interface EnumOrderStatus {
  PENDING: 'PENDING',
  PAID: 'PAID',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED'
};