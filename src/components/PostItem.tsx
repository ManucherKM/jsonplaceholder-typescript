import { FC } from "react"
import { IPost } from "../types/types"

interface IPostItem {
  post: IPost
}

const PostItem: FC<IPostItem> = ({ post }) => {
  return (
    <div className="PostItem">
      <p>
        <strong>
          Название:
        </strong>
        {post.title}
      </p>
      <p>
        <strong>
          Описание:
        </strong>
        {post.body}
      </p>
    </div>
  )
}

export default PostItem