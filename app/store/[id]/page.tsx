"use server";

import { ProductDTO } from "@/store/types/product.types";
import * as Api from '@/api';
import UpdateProductForm from "../../../components/UpdateProductForm/UpdateProductForm";
import ProductDetailView from "@/components/ProductDetailView/ProductDetailView";
import { OrderItemDTO } from "@/store/types/order.types";
import styles from "./page.module.scss";

export default async function Page({ params }: { params: number }) {
	const data: ProductDTO = await Api.products.findOne(params.id);

	return (
		<main className={styles.wrapper}>
			<ProductDetailView product={data} />
			<UpdateProductForm id={params.id} props={data} />
		</main>
	)
}