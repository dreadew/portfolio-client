
import axios from "@/core/axios";
 
import * as Api from '@/api';
import { cookies } from "next/dist/client/components/headers";

export const checkAuth = async () => {

	const nextCookies = cookies();

	const token = nextCookies.get('_token');

	axios.defaults.headers.authorization = "Bearer " + token?.value;

	try {
		await Api.auth.getMe();

		return true;
	} catch(err) {
		return false;
	}
}

/*export const checkAuth = async (ctx: GetServerSidePropsContext) => {
	
	const { _token } = nookies.get(ctx);

	axios.defaults.headers.authorization = "Bearer " + _token;

	try {
		await Api.auth.getMe();

		return {
			props: {}
		};
	} catch(err) {
		return {
			redirect: {
				destination: '/dashboard/auth',
				permanent: false,
			}
		};
	}
}*/