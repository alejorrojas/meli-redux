import { Product } from "../types"

export const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data: Product[] = await res.json()

    return data
}