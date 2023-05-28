"use client";

import * as Api from '@/api';
import { notification } from 'antd';
import { setCookie } from 'nookies';
import styles from './page.module.scss';
import img from '../../../assets/images/login.png';
import Image from "next/image";
import Link from 'next/link';

export default function Register() {

	async function handleSubmit(event: any) {
		event.preventDefault();

		const data = {
			email: String(event.target.email.value),
			name: String(event.target.name.value),
			password: String(event.target.password.value)
		};

		const repeatPassword = String(event.target.password2.value);

		if (!(repeatPassword === data.password)) {
			notification.error({
				message: "Ошибка",
				description: "Пароли не совпадают",
				duration: 2,
			});
			return;
		}

		try {
			"use server";

			const { accessToken } = await Api.auth.register(data);
			
			notification.success({
				message: "Успешно",
				description: 'Переходим в админ-панель ...',
				duration: 2,
			});

			setCookie(null, "_token", accessToken, {path: '/'});

			location.href = '/store';
		} catch (err: any) {
			notification.error({
				message: "Ошибка",
				description: err.response.data.message,
				duration: 2,
			})
		}
	}

	return (
		<main className={styles.page}>
			<div className={styles["page-wrapper"]}>
				<div className={styles["page-wrapper__text"]}>
					<h1 className={styles["page-wrapper__text-title"]}>Регистрация</h1>
					<p className={styles["page-wrapper__text-description"]}>Уже есть аккаунт? <Link href="/dashboard/auth">Войти</Link></p>
				</div>
				<form className={styles["page-wrapper__form"]}
				onSubmit={handleSubmit}>
					<div className={styles["page-wrapper__form-container"]}>
						<input className={styles["page-wrapper__form-container-input"]} type="email" name="email" placeholder="Эл. почта" />
					</div>
					<div className={styles["page-wrapper__form-container"]}>
						<input className={styles["page-wrapper__form-container-input"]} type="name" name="name" placeholder="Имя" />
					</div>
					<div className={styles["page-wrapper__form-container"]}>
						<input className={styles["page-wrapper__form-container-input"]} type="password" name="password" placeholder="Пароль" />
					</div>
					<div className={styles["page-wrapper__form-container"]}>
						<input className={styles["page-wrapper__form-container-input"]} type="password" name="password2" placeholder="Подтверждение пароля" />
					</div>
					<button className={styles["page-wrapper__form-button"]}>Зарегистрироваться</button>
				</form>
			</div>
			<div className={styles["page-image"]}>
				<Image className={styles["page-image__img"]} src={img} alt="" height="796" width="624" />
			</div>
		</main>
	)
}