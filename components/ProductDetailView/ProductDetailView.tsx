"use client"

import * as Api from '@/api';
import Image from "next/image";
import { ProductDTO } from "@/store/types/product.types";
import { useRouter } from "next/navigation";
import styles from "./ProductDetailView.module.scss";

export default function ProductDetailView({ product } : { product: ProductDTO }) {
	const router = useRouter();
	return (
		<div className={styles.product} key={`${product.id}`}>
			<h1 className={styles["product-title"]}>{ product.title }</h1>
			<div className={styles["product-wrapper"]}>
				<Image className={styles["product-wrapper__image"]} src={`http://localhost:7777/files/${product.images[0]}`} alt="" width={450} height={450} style={{objectFit: "cover"}} />
				<p className={styles["product-wrapper__text"]}>{ product.Category.name }</p>
				<p className={styles["product-wrapper__text"]}>{ product.description }</p>
				<p className={styles["product-wrapper__text"]}>Цена: { product.price }</p>
			</div>
			<div className={styles["product__button-container"]}>
				<button className={styles["product__button-container-button"]} onClick={() => router.push('/store')}>Вернуться в магазин</button>
				<button className={`${styles["product__button-container-button"]} ${styles.secondary}`} onClick={async () => Api.products.deleteById(product.id)}>Удалить</button>
			</div>
		</div>
	)
}