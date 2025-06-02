import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            <Link to={"/posts"}>
                <h1 className="font-bold text-3xl mb-4">Blog</h1>
            </Link>
            {/* <button className="bg-indigo-500 px-3 py-2 rounded-xl hover:bg-indigo-600 hover:cursor-pointer"></button> */}
            <button type="button" className="btn btn-base preset-filled">
                <Link to="/posts-create">Create Post</Link>
            </button>
        </div>
    )
}