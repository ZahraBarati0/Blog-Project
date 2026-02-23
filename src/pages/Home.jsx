import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section className="hero text-white">
                <div className="container py-5">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-7">
                            <h1 className="display-5 fw-bold mb-3">
                                A <span className="text-white">modern</span> multi-page blog
                                <br />
                                built by <span className="text-white">Ehsan Ehrari</span>
                            </h1>
                            <p className="lead text-white-50 mb-4">
                                Clean navigation, nested routes, URL params, and a protected
                                dashboard, all styled with Bootstrap.
                            </p>
                            <div className="d-flex gap-2 flex-wrap">
                                <Link className="btn btn-light rounded-pill px-4" to="/blog">
                                    Explore posts
                                </Link>
                                <Link
                                    className="btn btn-outline-light rounded-pill px-4"
                                    to="/dashboard"
                                >
                                    Open dashboard
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="glass rounded-4 p-4 shadow-lg">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="fw-semibold">What you’ll practice</div>
                                        <span className="badge text-bg-primary rounded-pill">
                                            Week 4 Lab
                                        </span>
                                    </div>
                                    <hr />
                                    <ul className="mb-0 text-secondary">
                                        <li>Layout routes with <b>Outlet</b></li>
                                        <li>Active links with <b>NavLink</b></li>
                                        <li>Params with <b>useParams</b></li>
                                        <li>Redirect with <b>Navigate</b></li>
                                        <li>Return-after-login using <b>location.state</b></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card card-hover rounded-4 h-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className="badge badge-soft rounded-pill mb-3">Routing</div>
                                <h3 className="h5 fw-bold">Real navigation</h3>
                                <p className="text-secondary mb-0">
                                    Multiple pages, clean URLs, and proper user flow.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-hover rounded-4 h-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className="badge badge-soft rounded-pill mb-3">UI</div>
                                <h3 className="h5 fw-bold">Bootstrap polish</h3>
                                <p className="text-secondary mb-0">
                                    Cards, spacing, subtle gradients, and responsive layout.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-hover rounded-4 h-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className="badge badge-soft rounded-pill mb-3">Auth</div>
                                <h3 className="h5 fw-bold">Protected dashboard</h3>
                                <p className="text-secondary mb-0">
                                    A simple pattern that scales to real apps.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;