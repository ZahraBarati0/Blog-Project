import { Link } from "react-router-dom";

function Dashboard({ user }) {
    return (
        <section className="container py-5">
            <div className="d-flex flex-column flex-md-row gap-3 align-items-md-end justify-content-between mb-4">
                <div>
                    <h2 className="fw-bold mb-1">Dashboard</h2>
                    <p className="text-secondary mb-0">
                        This is a protected route. Only visible after login.
                    </p>
                </div>
                <span className="badge text-bg-success rounded-pill px-3 py-2">
                    Logged in as {user?.email || "user"}
                </span>
            </div>

            <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                    <div className="card rounded-4 shadow-sm h-100">
                        <div className="card-body p-4">
                            <div className="badge badge-soft rounded-pill mb-3">Progress</div>
                            <h3 className="h5 fw-bold">Router skills</h3>
                            <p className="text-secondary mb-0">
                                You can now build multi-page apps with clean navigation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card rounded-4 shadow-sm h-100">
                        <div className="card-body p-4">
                            <div className="badge badge-soft rounded-pill mb-3">Next</div>
                            <h3 className="h5 fw-bold">Nested dashboard</h3>
                            <p className="text-secondary mb-0">
                                We can later add nested routes: /dashboard/overview, /dashboard/settings.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="card rounded-4 shadow-sm h-100">
                        <div className="card-body p-4">
                            <div className="badge badge-soft rounded-pill mb-3">Idea</div>
                            <h3 className="h5 fw-bold">Fetch real posts</h3>
                            <p className="text-secondary mb-3">
                                We also can replace local data with a public API.
                            </p>
                            <Link className="btn btn-outline-primary rounded-pill" to="/blog">
                                View posts
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;