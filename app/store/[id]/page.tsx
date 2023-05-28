"use server";

import { ProductDTO } from "@/store/types/product.types";
import * as Api from '@/api';
import UpdateProductForm from "../../../components/UpdateProductForm/UpdateProductForm";
import ProductDetailView from "@/components/ProductDetailView/ProductDetailView";
import { OrderItemDTO } from "@/store/types/order.types";
import styles from "./page.module.scss";
import { ReturnCategoryResponse } from "@/api/dto/category.dto";

export default async function Page({ params }: { params: any }) {
	const data: ProductDTO = await Api.products.findOne(params.id);
	const categories: Array<ReturnCategoryResponse> = await Api.category.getAll();

	return (
		<main className={styles.wrapper}>
			<ProductDetailView product={data} />
			<UpdateProductForm id={params.id} props={data} categories={categories} />
		</main>
	)
}