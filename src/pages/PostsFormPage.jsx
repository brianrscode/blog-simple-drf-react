import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createPost, delatePost, updatePost, getPost } from "../api/blog.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


export function PostsFormPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm()  // Initialize form handling with react-hook-form
    const navigate = useNavigate() // For navigation to other pages
    const params = useParams()  // Parameters from the URL

    useEffect(() => {
        async function loadPost() {  // Load task data if an ID is provided in the URL
            if (!params.id) return;
            const { data } = await getPost(params.id)
            setValue('title', data.title)
            setValue('category', data.category)
            setValue('content', data.content)
        }
        loadPost()
    }, [])

    const onSubmit = handleSubmit(async post => {
        if(params.id){  // If there is an ID, update the existing post
            await updatePost(params.id, post)
            toast.success("Post updated successfully")
        }else{ // If there is no ID, create a new post
            await createPost(post)
            toast.success("Post created successfully")
        }
        navigate("/posts")
    })

    return (
        <div className="max-w-xl mx-auto">
            <form action="" class="mx-auto w-full max-w-md space-y-4" onSubmit={onSubmit}>
                {errors.title && toast.error("Title is required")}

                <label className="label">
                    <span className="label-text">Title</span>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register("title", { required: true})}
                        className="input" // bg-zinc-700 p-3 rounded-lg block w-full mb-3
                    />
                </label>

                {errors.category && toast.error("Category is required")}
                <label className="label">
                    <span className="label-text">Category</span>
                    <select
                        {...register("category", { required: true})}
                        className="select" // bg-zinc-700 p-3 rounded-lg block w-full mb-3
                    >
                        <option value="Technology">Technology</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Health">Health</option>
                        <option value="Travel">Travel</option>
                    </select>
                </label>

                {errors.content && toast.error("Content is required")}
                <label className="label">
                    <span className="label-text">Content</span>
                    <textarea
                        rows="3"
                        placeholder="Content"
                        {...register("content", { required: true})}
                        className="textarea"  // bg-zinc-700 p-3 rounded-lg block w-full mb-3
                    />
                </label>

                <button className="ig-btn preset-filled w-full">Save</button>
                {/* <button className="bg-indigo-500 p-3 rounded-lg block w-48 mt-3">Save</button> */}

                {params.id && (
                    <div className="flex justify-end">
                        <button
                            className="ig-btn preset-outlined"  // bg-red-500 p-3 rounded-lg block w-48 mt-3
                            onClick={async () => {
                            const confirmed = window.confirm("Are you sure you want to delete this task?")
                            if (!confirmed) return
                            await delatePost(params.id);
                            toast.success("Post deleted successfully")
                            navigate("/posts")
                        }}>
                            Delete
                        </button>
                    </div>
                )}
            </form>

        </div>
    )
}