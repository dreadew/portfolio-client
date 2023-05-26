export type ProductDTO = {
	id: number
	title: string
	description: string
	price: number
	imageUrl: string
}

export type UpdateProductDTO = {
	title?: string
	description?: string,
	price?: number,
	imageUrl?: string
}