import { FC, useEffect, useState } from "react"
import List from "../components/List/List"
import { IUser } from "../types/types"
import axios from "axios"
import UserItem from "../components/UserItem"

const Users: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        const { data } = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
    }

    return (
        <div>
            <h1 className="title">Пользователи</h1>
            <List
                mass={users}
                render={(user) => <UserItem key={user.id} user={user} />}
            />
        </div>)
}

export default Users