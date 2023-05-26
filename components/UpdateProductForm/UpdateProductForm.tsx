"use client";

import * as Api from '@/api';
import { ProductDTO } from '@/store/types/product.types';
import { notification } from 'antd';
import styles from "./UpdateProductForm.module.scss";

export default function UpdateProductForm({ id, props } : { id: number, props: ProductDTO }) {
	async function handleSubmit(event: any) {
		event.preventDefault();

		const data = {
			"title": String(event.target.title.value),
			"description": String(event.target.description.value),
			"imageUrl": String(event.target.imageUrl.value),
			"price": Number(event.target.price.value)
		};

		if (data.title === '' || data.description === '' || data.imageUrl === '' || data.price === null) {
			notification.error({
				message: "Ошибка",
				description: "Нельзя использовать пустые значения в полях",
				duration: 2,
			});
			return;
		}

		try {
			"use server";

			const response = await Api.products.update(id, data);

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
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles["form-input__wrapper"]}>
				<label className={styles["form-label"]}>Title</label>
				<input className={styles["form-input"]} name="title" placeholder={`${props.title}`} />
			</div>
			<div className={styles["form-input__wrapper"]}>
				<label className={styles["form-label"]}>Description</label>
				<textarea className={styles["form-input"]} name="description" placeholder={`${props.description}`} />
			</div>
			<div className={styles["form-input__wrapper"]}>
				<label className={styles["form-label"]}>Image URL</label>
				<input className={styles["form-input"]} name="imageUrl" placeholder={`${props.imageUrl}`} />
			</div>
			<div className={styles["form-input__wrapper"]}>
				<label className={styles["form-label"]}>Price</label>
				<input className={styles["form-input"]} name="price" placeholder={`${props.price}`} />
			</div>
			<button className={styles["form-button"]} type="submit">Send data</button>
		</form>
	);
}