import { FC } from "react"
import { IUser } from "../types/types"

interface IUserItem {
    user: IUser
}

const UserItem: FC<IUserItem> = ({ user }) => {
    return (
        <div className="UserItem">
            <p>
                <strong>
                    Имя:
                </strong>
                {user.name}
            </p>
            <p>
                <strong>
                    Адрес:
                </strong>
                город {user.address.city} улица {user.address.street}
            </p>
        </div>
    )
}

export default UserItem