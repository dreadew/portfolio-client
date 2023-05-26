"use client";

import * as Api from '@/api';
import { notification } from 'antd';
import { setCookie } from 'nookies';
import styles from './page.module.scss';
import Link from 'next/link';
import img from '../../../assets/images/login.png';
import Image from "next/image";

export default function Auth() {

	async function handleSubmit(event: any) {
		event.preventDefault();

		const data = {
			email: String(event.target.email.value),
			password: String(event.target.password.value)
		};

		if (data.email === '' || data.password === '') {
			notification.error({
				message: "Ошибка",
				description: 'Нельзя использовать пустые значения',
				duration: 2,
			});
			return;
		}

		try {
			"use server";
				
			const { accessToken } = await Api.auth.login(data);
			
			notification.success({
				message: "Успешно",
				description: 'Переходим в админ-панель ...',
				duration: 2,
			});

			setCookie(null, "_token", accessToken, {path: '/'});

			location.href = '/store';
		} catch (err: unknown) {
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
					<h1 className={styles["page-wrapper__text-title"]}>Log in</h1>
					<p className={styles["page-wrapper__text-description"]}>Haven't joined our community? <Link href="/dashboard/register">Register</Link></p>
				</div>
				<form className={styles["page-wrapper__form"]} onSubmit={handleSubmit}>
					<div className={styles["page-wrapper__form-container"]}>
						<input className={styles["page-wrapper__form-container-input"]} type="email" name="email" placeholder="Enter your e-mail" />
					</div>
					<div className={styles["page-wrapper__form-container"]}>
						<input className={styles["page-wrapper__form-container-input"]} type="password" name="password" placeholder="Enter your password" />
					</div>
					<button className={styles["page-wrapper__form-button"]}>Log in</button>
				</form>
			</div>
			<div className={styles["page-image"]}>
				<Image className={styles["page-image__img"]} src={img} alt="" height="796" width="624" />
			</div>
		</main>
	)
}