import { Link, useSearchParams } from "react-router-dom";
import { posts } from "../data/posts";

function Blog() {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = (searchParams.get("q") || "").toLowerCase();

    const filtered = posts.filter(
        (p) =>
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q) ||
            p.tag.toLowerCase().includes(q)
    );

    return (
        <section className="container py-5">
            <div className="d-flex flex-column flex-md-row gap-3 align-items-md-end justify-content-between mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Blog</h2>
                    <p className="text-secondary mb-0">
                        Click a post to see URL params in action.
                    </p>
                </div>

                <div className="col-12 col-md-5 col-lg-4">
                    <label className="form-label text-secondary">Search</label>
                    <input
                        className="form-control form-control-lg rounded-4"
                        placeholder="Try: router, ui, auth…"
                        value={q}
                        onChange={(e) => setSearchParams({ q: e.target.value })}
                    />
                </div>
            </div>

            <div className="row g-4">
                {filtered.map((post) => (
                    <div key={post.id} className="col-md-6 col-lg-4">
                        <div className="card card-hover rounded-4 h-100 shadow-sm overflow-hidden">
                            <img
                                src={post.cover}
                                alt={post.title}
                                className="w-100"
                                style={{ height: 190, objectFit: "cover" }}
                                loading="lazy"
                            />
                            <div className="card-body p-4">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="badge text-bg-light border rounded-pill">
                                        {post.tag}
                                    </span>
                                    <span className="text-secondary small">{post.readTime}</span>
                                </div>
                                <h3 className="h5 fw-bold">{post.title}</h3>
                                <p className="text-secondary">{post.excerpt}</p>
                                <Link className="btn btn-primary rounded-pill" to={`/blog/${post.id}`}>
                                    Read
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

                {filtered.length === 0 && (
                    <div className="col-12">
                        <div className="alert alert-warning rounded-4">
                            No posts found. Try a different keyword.
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Blog;