"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import HeaderCart from "./HeaderCart/HeaderCart";
import { useState } from "react";
import * as Api from '@/api';

export default function Header({ isAuthorized }: { isAuthorized: boolean }) {
	const [hambActive, setHambActive] = useState<boolean>(false);
	const [active, setActive] = useState<boolean>(false);

	const logout = () => {
		Api.auth.logout();
		location.href = '/';
	}

	return (
		<nav className={styles.nav}>
			<div className={styles["nav-wrapper"]}>
				<div className={styles["nav-wrapper__logo"]}>
					<Link className={styles["nav-wrapper__logo-text"]} href={'/'}>
						<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M16.8108 0H31.1886V16.8121L47.9998 0.00092683V18.5343L33.2668 33.2673L48 48.0005H29.4666L24.0001 42.534L18.5334 48.0007H0L14.7334 33.2673L0.000187591 18.5341V0.000732422L16.8108 16.8114V0Z" fill="#1D1D1D"/>
						</svg>
					</Link>
				</div>
				<ul className={styles["nav-wrapper__list"]}>
					<li className={styles["nav-wrapper__list-burger"]}>
						<div className={styles["nav-wrapper__list-burger__btn"]} onClick={() => setHambActive(!hambActive)}>
							<div className={styles.ln1}></div>
							<div className={styles.ln2}></div>
						</div>
					</li>
					<li className={styles["nav-wrapper__list-item"]}>
						<Link className={styles["nav-wrapper__list-item-link"]} href={'/'}>
							Главная
						</Link>
					</li>
					<li className={styles["nav-wrapper__list-item"]}>
						<Link className={styles["nav-wrapper__list-item-link"]} href={'/about'}>
							О нас
						</Link>
					</li>
					<li className={styles["nav-wrapper__list-item"]}>
						<Link className={styles["nav-wrapper__list-item-link"]} href={'/store'}>
							Магазин
						</Link>
					</li>
					<li className={styles["nav-wrapper__list-item"]}>
						<button onClick={() => setActive(!active)} className={styles["nav-wrapper__list-item-link"]}>
							Корзина
						</button>
						<HeaderCart active={active} />
					</li>
				</ul>
				<ul className={styles["nav-wrapper__auth"]}>
					{ !isAuthorized ? (
						<>
						<li className={styles["nav-wrapper__auth-item"]}>
							<Link className={`${styles["nav-wrapper__auth-item-link"]} ${styles.secondary}`} href={'/dashboard/auth'}>
								Войти
							</Link>
						</li>
						<li className={styles["nav-wrapper__auth-item"]}>
							<Link className={`${styles["nav-wrapper__auth-item-link"]} ${styles.primary}`} href={'/dashboard/register'}>
								Зарегистрироваться
							</Link>
						</li>
						</> ) : <li className={styles["nav-wrapper__auth-item"]}>
							<button onClick={() => logout()} className={`${styles["nav-wrapper__auth-item-link"]} ${styles.primary}`}>
							Выйти
						</button>
						</li>
					}
				</ul>
					<ul className={hambActive ? `${styles["nav-wrapper__list-mb"]} ${styles.active}` : styles["nav-wrapper__list-mb"]}>
						<li className={styles["nav-wrapper__list-mb-item"]}>
							<Link className={styles["nav-wrapper__list-mb-item-link"]} href={'/'}>
								Главная
							</Link>
						</li>
						<li className={styles["nav-wrapper__list-mb-item"]}>
							<Link className={styles["nav-wrapper__list-mb-item-link"]} href={'/about'}>
								О нас
							</Link>
						</li>
						<li className={styles["nav-wrapper__list-mb-item"]}>
							<Link className={styles["nav-wrapper__list-mb-item-link"]} href={'/store'}>
								Магазин
							</Link>
						</li>
						{ !isAuthorized ? (
						<>
						<li className={styles["nav-wrapper__list-mb-item"]}>
							<Link className={styles["nav-wrapper__list-mb-item-link"]} href={'/dashboard/auth'}>
								Войти
							</Link>
						</li>
						<li className={styles["nav-wrapper__list-mb-item"]}>
							<Link className={styles["nav-wrapper__list-mb-item-link"]} href={'/dashboard/register'}>
								Зарегистрироваться
							</Link>
						</li>
						</> ) : <li className={styles["nav-wrapper__list-mb-item"]}>
							<button onClick={() => logout()} className={styles["nav-wrapper__list-mb-item-link"]}>
							Выйти
						</button>
						</li>
					}
						<li className={styles["nav-wrapper__list-mb-item"]}>
							<button onClick={() => setActive(!active)} className={styles["nav-wrapper__list-mb-item-link"]}>
								Корзина
							</button>
							<HeaderCart active={active} />
						</li>
					</ul>
			</div>
		</nav>
	)
}
