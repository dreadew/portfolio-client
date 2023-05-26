"use client"

import { ProductDTO } from "@/store/types/product.types";
import { useRouter } from "next/navigation";
import styles from "./ProductDetailView.module.scss";

export default function ProductDetailView({ product } : { product: ProductDTO }) {
	const router = useRouter();
	return (
		<div className={styles.product} key={`${product.id}`}>
			<h1 className={styles["product-title"]}>{ product.title }</h1>
			<div className={styles["product-wrapper"]}>
				<p className={styles["product-wrapper__text"]}>{ product.description }</p>
				<p className={styles["product-wrapper__image"]}>{ product.imageUrl }</p>
				<p className={styles["product-wrapper__text"]}>Цена: { product.price }</p>
			</div>
			<button className={styles["product-button"]} onClick={() => router.push('/store')}>Back to store</button>
		</div>
	)
}