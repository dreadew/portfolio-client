"use server";

import * as Api from '@/api';
import { ProductDTO } from "@/store/types/product.types";;
import React from "react";
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import styles from "./page.module.scss";
import ProductSearch from '@/components/ProductSearch/ProductSearch';
import { checkAuth } from '@/utils/checkAuth';
import { redirect } from 'next/navigation';

export default async function Store({ searchParams } : {
	searchParams: { searchTerm?: string }
}) {
	const isAuthorized = await checkAuth();
	
	if (!isAuthorized)
		redirect('/dashboard/auth');

	const searchQuery = searchParams.searchTerm ?? "";

	// Get Initial Data
	const data = await Api.products.findAll(searchQuery);

	return (
		<>
			<main className={styles.wrapper}>
				<ProductSearch />
				<ProductGrid products={data} />
			</main>
		</>
	)
}