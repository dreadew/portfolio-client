"use client";

import { cartItems, decrement, increment } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ProductDTO } from "@/store/types/product.types";
import { useRouter } from "next/navigation";
import styles from "./ProductGrid.module.scss";


export default function ProductGrid({ products }: { products: ProductDTO[] }) {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const items = useAppSelector(cartItems);
	return(
		<div className={styles["product-grid"]}>
			{	products?.map(product => (
					<div className={styles["product-grid__item"]} key={`${product.id}`}>
						<h1 className={styles["product-grid__item-title"]}>{product.title}</h1>
						<p className={styles["product-grid__item-description"]}>{product.description}</p>
						<div className={styles["product-grid__item-wrapper"]}>
							<button className={styles["product-grid__item-wrapper-button"]} onClick={() => dispatch(increment({
								productId: product.id,
								price: product.price,
								quantity: items.filter(item => item.productId === product.id)[0]?.quantity
							}))}>{ items.filter(item => item.productId === product.id)[0] ? "+" : "Buy now" }</button>
							{ items.filter(item => item.productId === product.id)[0] && 
							<p className={styles["product-grid__item-wrapper-text"]}>{ items.filter(item => item.productId === product.id)[0]?.quantity }</p> 
							}
							{ items.filter(item => item.productId === product.id)[0] && <button className={styles["product-grid__item-wrapper-button"]} onClick={() => dispatch(decrement({
								productId: product.id,
								price: product.price,
								quantity: items.filter(item => item.productId === product.id)[0]?.quantity
							}))}>-</button>}
							<button className={`${styles["product-grid__item-wrapper-button"]} ${styles["btn-secondary"]}`} onClick={() => router.push(`/store/${product.id}`)}>Open</button>
						</div>
					</div>
				))
			}
		</div>
	)
}