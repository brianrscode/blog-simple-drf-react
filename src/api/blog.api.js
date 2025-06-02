import axios from "axios";


const postAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/api/posts/",
    headers: {
        "Content-Type": "application/json"
    }
})

export const createPost = (post) => postAPI.post("/", post);
export const getAllPosts = () => postAPI.get("/");
export const getPost = (id) => postAPI.get(`/${id}/`);
export const updatePost = (id, post) => postAPI.put(`/${id}/`, post);
export const delatePost = (id) => postAPI.delete(`/${id}/`);