import { FC } from "react"
import { ITodo } from "../types/types"

interface ITodoItem {
    todo: ITodo
}

const TodoItem: FC<ITodoItem> = ({ todo }) => {
    return (
        <div className="TodoItem">
            <p>
                <strong>
                    Задача:
                </strong>
                {todo.title}
            </p>
            <p>
                <strong>
                    Статус:
                </strong>
                {`${todo.completed}`}
            </p>
        </div>
    )
}

export default TodoItem