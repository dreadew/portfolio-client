export interface LoginFormDto {
	email: string,
	password: string
}

export interface LoginResponseDto {
	accessToken: string,
	refreshToken: string
}

export type RegisterFormDto = LoginFormDto & {name: string};

export type RegisterResponseDto = LoginResponseDto;

export interface User {
	id: number,
	email: string,
	name: string,
	password: string
}

export interface UserCredentials {
	name: string
}