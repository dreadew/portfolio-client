/*"use server";

import { GetServerSidePropsContext } from "next/types";
import Header from "./Header";
import { checkAuth } from "@/utils/checkAuth";

export default async function HeaderServer() {
	const isAuthorized = await checkAuth();
	return (
		<>
			<Header isAuthorized={isAuthorized} />
		</>
	)
}*/