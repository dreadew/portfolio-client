export type Cart = {
	items: OrderItemDTO[]
}

export type OrderItemDTO = {
	quantity: number;
	price: number;
	productId: number;
}

enum EnumOrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED'
};