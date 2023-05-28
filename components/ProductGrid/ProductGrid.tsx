"use client";

import Image from 'next/image';
import { cartItems, decrement, increment } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ProductDTO } from "@/store/types/product.types";
import { useRouter } from "next/navigation";
import styles from "./ProductGrid.module.scss";
import Link from "next/link";


export default function ProductGrid({ products }: { products: ProductDTO[] }) {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const items = useAppSelector(cartItems);
	//console.log(productsImages.filter(item => item.id === 1)[0])
	/*
		<Image src={ productsImages.filter(item => item.id === product.id)[0].file } alt="" width={300} height={300} style={{objectFit: "cover"}} />
	*/
	return(
		<>
			<div className={styles["product-buttons"]}>
				<Link className={styles["product-buttons__btn"]} href="/store/create">Создать товар</Link>
				<Link className={`${styles["product-buttons__btn"]} ${styles.secondary}`} href="/category/create">Создать категорию</Link>
			</div>
			<div className={styles["product-grid"]}>
				{	products?.map(product => (
						<div className={styles["product-grid__item"]} key={`${product.id}`}>
							<Image className={styles["product-grid__item-image"]} src={`http://localhost:7777/files/${product.images[0]}`} alt="" width={450} height={450} style={{objectFit: "cover"}} />
							<h1 className={styles["product-grid__item-title"]}>{product.title}</h1>
							<p className={styles["product-grid__item-description"]}>{product.Category.name}</p>
							<p className={styles["product-grid__item-description"]}>{product.description}</p>
							<div className={styles["product-grid__item-wrapper"]}>
								<button className={styles["product-grid__item-wrapper-button"]} onClick={() => dispatch(increment({
									productId: product.id,
									price: product.price,
									quantity: items.filter(item => item.productId === product.id)[0]?.quantity
								}))}>{ items.filter(item => item.productId === product.id)[0] ? "+" : "Добавить в корзину" }</button>
								{ items.filter(item => item.productId === product.id)[0] && 
								<p className={styles["product-grid__item-wrapper-text"]}>{ items.filter(item => item.productId === product.id)[0]?.quantity }</p> 
								}
								{ items.filter(item => item.productId === product.id)[0] && <button className={styles["product-grid__item-wrapper-button"]} onClick={() => dispatch(decrement({
									productId: product.id,
									price: product.price,
									quantity: items.filter(item => item.productId === product.id)[0]?.quantity
								}))}>-</button>}
								<button className={`${styles["product-grid__item-wrapper-button"]} ${styles["btn-secondary"]}`} onClick={() => router.push(`/store/${product.id}`)}>Подробнее</button>
							</div>
						</div>
					))
				}
			</div>
		</>
	)
}