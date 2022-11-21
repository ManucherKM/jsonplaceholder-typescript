export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    address: IUserAddress
}

interface IUserAddress {
    street: string,
    city: string
}