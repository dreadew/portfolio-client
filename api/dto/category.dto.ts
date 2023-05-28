export type CategoryDTO = {
	name: string
}

export type CreateCategoryResponseDTO = {
	id: number,
	createdAt: string,
	updatedAt: string,
	name: string,
	slug: string
}

export type ReturnCategoryResponse = {
	id: number,
	name: string,
	slug: number
}

export type GetCategoryResponse = Array<ReturnCategoryResponse>;