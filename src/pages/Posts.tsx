import { FC, useEffect, useState } from 'react'
import { IPost } from '../types/types'
import axios from 'axios'
import List from '../components/List/List'
import PostItem from '../components/PostItem'

const Posts: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data } = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
    setPosts(data)
  }

  return (
    <div>
      <h1 className="title">Посты</h1>
      <List
        mass={posts}
        render={(post) => <PostItem key={post.id} post={post} />}
      />
    </div>
  )
}

export default Posts