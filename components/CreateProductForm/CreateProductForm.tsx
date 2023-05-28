"use client";

import * as Api from '@/api';
import { notification } from 'antd';
import styles from "./CreateProductForm.module.scss";
import { ReturnCategoryResponse } from '@/api/dto/category.dto';
import { useState } from 'react';

export default function CreateProductForm({ categories }: { categories: Array<ReturnCategoryResponse> }) {
	const [categoryId, setCategoryId] = useState<string>("");

	async function handleSubmit(event: any) {
		event.preventDefault();

		const data = {
			"title": String(event.target.title.value),
			"description": String(event.target.description.value),
			"price": Number(event.target.price.value),
			"categoryId": +categoryId,
			"files": event.target.file.files[0],
		};

		if (data.title === '' || data.description === '' || data.price === null || categoryId === "" || !categories.filter(item => item.id === +categoryId)) {
			notification.error({
				message: "Ошибка",
				description: "Нельзя использовать пустые значения в полях",
				duration: 2,
			});
			return;
		}

		try {
			"use server";

			const response = await Api.products.create(data);

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
			<h1 className={styles["product-wrapper-title"]}>Создать товар</h1>
			<form className={styles["product-wrapper-form"]} onSubmit={handleSubmit}>
				<div className={styles["product-wrapper-form-input__wrapper"]}>
					<input className={styles["product-wrapper-form-input"]} name="title" placeholder={'Название товара'} />
				</div>
				<div className={styles["product-wrapper-form-input__wrapper"]}>
					<textarea className={styles["product-wrapper-form-input"]} name="description" placeholder={'Описание товара'} />
				</div>
				<div className={styles["product-wrapper-form-input__wrapper"]}>
					<input className={styles["product-wrapper-form-input"]} name="categoryId" value={categories.filter(item => item.id === +categoryId)[0]?.name || categoryId} onChange={(e) => setCategoryId(String(e.target.value))} placeholder={'ID категории'} />
					<div className={styles["product-wrapper-form-content__wrapper"]}>
						<p className={styles["product-wrapper-form-content__wrapper-text"]}>Доступные категории: </p>
						{ categories.map(item => (
								<button className={styles["product-wrapper-form-content__wrapper-btn"]} key={item.id} type='button' onClick={() => setCategoryId(String(item.id))}>{ item.name }</button>
						)) }
					</div>
				</div>
				<div className={styles["product-wrapper-form-input__wrapper"]}>
					<input className={styles["product-wrapper-form-input"]} name="file" type="file" multiple />
				</div>
				<div className={styles["product-wrapper-form-input__wrapper"]}>
					<input className={styles["product-wrapper-form-input"]} name="price" placeholder={'Цена'} />
				</div>
				<button className={styles["product-wrapper-form-button"]} type="submit">Создать</button>
			</form>
		</div>
	);
}