import axios from "@/core/axios";
import { LoginFormDto, RegisterFormDto, RegisterResponseDto, LoginResponseDto, User } from "./dto/auth.dto";
import { destroyCookie, parseCookies } from "nookies";

export const login = async (values: LoginFormDto): Promise<LoginResponseDto> => {
	const { data } = await axios.post(axios.defaults.baseURL + '/users/login', values);

	return data;
}

export const register = async (values: RegisterFormDto): Promise<RegisterResponseDto> => {
	return (await axios.post(axios.defaults.baseURL + '/users/register', values)).data;
}

export const getMe = async (): Promise<User> => {
	return (await axios.get(axios.defaults.baseURL + '/users/me')).data;
}

export const logout = () => {
	destroyCookie(null, "_token", { path: '/' });
}