"use server";

import { ReturnCategoryResponse } from "@/api/dto/category.dto";
import CreateProductForm from "@/components/CreateProductForm/CreateProductForm";
import * as Api from '@/api';

export default async function CreatePage() {
	const categories: Array<ReturnCategoryResponse> = await Api.category.getAll();

	return (
		<main style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
			<CreateProductForm categories={categories} />
		</main>
	)
}