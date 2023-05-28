export type ProductDTO = {
	id: number
	title: string
	description: string
	price: number
	images: string[]
	Category: {
		id: number,
		name: string,
		slug: string
	}
}

export type UpdateProductDTO = {
	title?: string
	description?: string,
	price?: number,
	files: File
}

export type CreateProductDTO = {
	title?: string
	description?: string,
	price?: number,
	files: File
}