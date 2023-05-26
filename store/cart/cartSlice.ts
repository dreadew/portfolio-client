import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { Cart, OrderItemDTO } from "../types/order.types";
import { RootState } from "../store";
import { getCartFromLS } from "../utils/getCartFromLS";

const cartData: OrderItemDTO[] = getCartFromLS();

const initialState: Cart = {
	'items': cartData,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<OrderItemDTO>) => {
			const item = state.items.find(
				(el) => el.productId === action.payload.productId
			);
			if (item) item.quantity++;

			else {
				state.items.push({
					...action.payload,
					quantity: 1
				})
			}

			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		decrement: (state, action: PayloadAction<OrderItemDTO>) => {
			const item = state.items.find(
				(el) => el.productId === action.payload.productId
			);

			if (item) {
				item.quantity--;
				if (item.quantity === 0) {
					state.items = state.items.filter(
						(el) => el.productId !== action.payload.productId
					);
				}
			}

			localStorage.setItem('cart', JSON.stringify(state.items));
		}
	}
});

export const cartItems = (state: RootState) => state.cart.items;

export const totalCartItemSelector = createSelector([cartItems], (cartItems) => cartItems.reduce((total: number, curr: OrderItemDTO) => (total += curr.quantity), 0));

export const totalPriceSelector = createSelector([cartItems], (cartItems) => cartItems.reduce(
	(total: number, curr: OrderItemDTO) => (total += curr.quantity * curr.price), 0
));

export const productQuantitySelector = createSelector(
	[cartItems, (cartItems, productId: number) => productId],
	(cartItems, productId) =>
		cartItems.find((el) => el.productId === productId)?.quantity
);

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;