import { Link, useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../data/posts";

function BlogDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = getPostById(id);

    if (!post) {
        return (
            <section className="container py-5">
                <div className="alert alert-danger rounded-4">
                    Post not found.
                </div>
                <Link className="btn btn-outline-primary rounded-pill" to="/blog">
                    Back to Blog
                </Link>
            </section>
        );
    }

    return (
        <section className="container py-5">
            <nav aria-label="breadcrumb" className="mb-3">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {post.tag}
                    </li>
                </ol>
            </nav>

            <div className="card rounded-4 shadow-sm overflow-hidden">
                <img
                    src={post.cover}
                    alt={post.title}
                    className="w-100"
                    style={{ height: 320, objectFit: "cover" }}
                />
                <div className="card-body p-4 p-lg-5">
                    <div className="d-flex flex-wrap align-items-center gap-2 justify-content-between mb-3">
                        <span className="badge text-bg-primary rounded-pill">{post.tag}</span>
                        <div className="text-secondary small">
                            {post.date} • {post.readTime}
                        </div>
                    </div>

                    <h1 className="h2 fw-bold mb-3">{post.title}</h1>
                    <p className="lead text-secondary">{post.excerpt}</p>

                    <div className="mt-4">
                        {post.content.map((p, idx) => (
                            <p key={idx} className="text-secondary fs-5" style={{ lineHeight: 1.7 }}>
                                {p}
                            </p>
                        ))}
                    </div>

                    <div className="d-flex gap-2 mt-4 flex-wrap">
                        <button
                            className="btn btn-outline-secondary rounded-pill"
                            onClick={() => navigate(-1)}
                        >
                            ← Back
                        </button>
                        <Link className="btn btn-primary rounded-pill" to="/blog">
                            More posts
                        </Link>
                    </div>

                    <hr className="my-4" />
                    <div className="text-secondary">
                        <span className="fw-semibold">URL Param demo:</span> <code>id</code> =
                        <span className="ms-2 badge text-bg-light border rounded-pill code-pill">
                            {id}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogDetails;