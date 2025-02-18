import { useEffect, useState } from "react";
import { Post } from "./Post";
import { list } from "postcss";

interface IPost {
    id: number
    title: string
    body: string
}

export function PostsList () {

    const [posts, setPosts] = useState<IPost[]>([])

    async function getAllPosts() {
        await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(json => setPosts(json))
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <ul className="py-6 flex flex-col gap-3">
            {posts.map(({id, title, body}) => (
                <li key={id}>
                    <Post title={title} body={body}/>
                </li>
            ))}
        </ul>
    )
}