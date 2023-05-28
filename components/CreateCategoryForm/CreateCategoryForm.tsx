"use client";

import * as Api from '@/api';
import { notification } from 'antd';
import styles from "./CreateCategoryForm.module.scss";

export default function CreateCategoryForm() {
	async function handleSubmit(event: any) {
		event.preventDefault();

		const data = {
			"name": event.target.name.value
		};

		if (data.name === '') {
			notification.error({
				message: "Ошибка",
				description: "Нельзя использовать пустые значения в полях",
				duration: 2,
			});
			return;
		}

		try {
			"use server";

			const response = await Api.category.create(data);

			notification.success({
				message: "Успешно",
				description: 'Товар обновлён',
				duration: 2,
			});
		} catch (err: any) {
			notification.error({
				message: "Ошибка",
				description: err.response.data.message,
				duration: 2,
			});
		}
	}

	return (
		<div className={styles["product-wrapper"]}>
			<h1 className={styles["product-wrapper-title"]}>Создать категорию</h1>
			<form className={styles["product-wrapper-form"]} onSubmit={handleSubmit}>
				<div className={styles["product-wrapper-form-input__wrapper"]}>
					<input className={styles["product-wrapper-form-input"]} name="name" placeholder={'Название категории'} />
				</div>
				<button className={styles["product-wrapper-form-button"]} type="submit">Создать</button>
			</form>
		</div>
	);
}