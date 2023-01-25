import { IUser } from "../types"

export const authUser = async ({username, password}: IUser) => {
    const res = await fetch('https://63d16d9ad5f0fa7fbdcb3bda.mockapi.io/auth/users',{
            method:'POST',
            body:JSON.stringify({
                username,
                password
            })
        })

    const userLogged: IUser = await res.json()

    return userLogged

}