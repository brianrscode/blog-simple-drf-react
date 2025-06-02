import { useState, useEffect } from "react";
import { getAllPosts } from "../api/blog.api";
import { Post } from "./Post";

export function PostList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function loadPosts(){
            const res = await getAllPosts()
            setPosts(res.data)
        }
        loadPosts()
    }, [])

    return (
        <div className="grid grid-cols-3 gap-3">
            {posts && posts.map((post) => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    )
}