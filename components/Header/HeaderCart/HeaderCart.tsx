"use client";

import styles from "./HeaderCart.module.scss";
import CartList from "./CartList/CartList";
import * as Api from '@/api';
import { useState } from "react";
import { OrderItemDTO } from "@/store/types/order.types";
import { notification } from "antd";

export default function HeaderCart({ active }: { active: boolean }) {
	const [items, setItems] = useState<OrderItemDTO[]>([]);
	const handleOrder = async () => {
		try {
			"use server";

			if (!items) {
				notification.error({
					message: "Ошибка",
					description: "Пустая корзина",
					duration: 2,
				});
				return;
			}

			await Api.order.placeOrder({
				items: items,
				status: 'PENDING'
			});

			notification.success({
				message: "Успешно",
				description: 'Заказ создан',
				duration: 2,
			});
		} catch (err: any) {
			notification.error({
				message: "Ошибка",
				description: err.response.data.message,
				duration: 2,
			})
		}
	}
	return (
		<div className={active ? `${styles.wrapper} ${styles.active}` : styles.wrapper}>
			<ul className={styles["wrapper-list"]}>
				<CartList active={active} setItems={setItems} />
				<button onClick={handleOrder} className={styles['wrapper-list__button']}>Order now</button>
			</ul>
		</div>
	)
}