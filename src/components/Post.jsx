import { useNavigate } from "react-router-dom";


export function Post({ post }) {
    const navigate = useNavigate();
    const onClick = () => navigate(`/posts/${post.id}`);
    return (
        <>
            <a
                href="#"
                className="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden rounded-2xl"
                onClick={onClick}
            >
                {/* Article */}
                <article className="space-y-4 p-4">
                    <div>
                    <h3 className="h3">{post.title}</h3>
                    <br />
                    <span className="badge preset-filled">{post.category}</span>
                    </div>
                    <p className="opacity-60">{post.content}</p>
                </article>
                {/* Footer */}
                <footer className="flex items-center justify-between gap-4 p-4">
                    <small className="opacity-60">On {new Date().toLocaleDateString()}</small>
                </footer>
            </a>
        </>
    );
}