export interface Product {
    title: string,
    price: number,
    image: string
}

export interface ICard {
    product: Product
}

export interface IUser{
    username: string,
    password: string
}

export interface IState {
    success: boolean,
    error: boolean,
    product: Product[],
    loading: boolean
}