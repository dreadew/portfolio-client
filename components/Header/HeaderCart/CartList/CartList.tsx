import { cartItems, decrement, increment, totalPriceSelector } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import styles from "../HeaderCart.module.scss";
import { OrderItemDTO } from "@/store/types/order.types";
import { Dispatch, useEffect } from "react";

export default function CartList({ active, setItems }: { active: boolean, setItems: Dispatch<React.SetStateAction<OrderItemDTO[]>> }) {
	const items = useAppSelector(cartItems);
	const total = useAppSelector(totalPriceSelector);
	const dispatch = useAppDispatch();
	useEffect(() => {
		setItems(items);
	}, [items])
	return (
		<>
			<li className={styles["wrapper-list__item"]}>Корзина</li>
					{
						items?.map(item => (
							<div className={styles["wrapper-list__container"]} key={item.productId}>
								<li className={styles["wrapper-list__container-item"]}>
									{ item.productId }
								</li>
								<div className={styles["wrapper-list__container-div"]}>
									<button onClick={() => dispatch(increment(item))} className={styles["wrapper-list__container-div-button"]}>+</button>
									<li className={styles["wrapper-list__container-div-item"]}>
										{ item.quantity}
									</li>
									<button onClick={() => dispatch(decrement(item))} className={styles["wrapper-list__container-div-button"]}>-</button>
								</div>
								<li className={styles["wrapper-list__container-item"]}>{ item.price * item.quantity }</li>
							</div>
						))
					}
				<li className={styles["wrapper-list__item-total"]}>Итог: { total }</li>
		</>
	)
}