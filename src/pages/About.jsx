function About() {
    return (
        <section className="container py-5">
            <div className="row g-4 align-items-start">
                <div className="col-lg-7">
                    <h2 className="fw-bold mb-2">About this project</h2>
                    <p className="text-secondary fs-5" style={{ lineHeight: 1.7 }}>
                        This mini project is built for Week 4 (React Router). It focuses on
                        creating real navigation, nested layouts, URL params, and a protected
                        route flow, styled with Bootstrap so it looks like a production app.
                    </p>

                    <div className="card rounded-4 shadow-sm">
                        <div className="card-body p-4">
                            <h3 className="h5 fw-bold mb-2">What to practice</h3>
                            <ul className="text-secondary mb-0">
                                <li>Layout routes with <b>Outlet</b></li>
                                <li>Active nav styling using <b>NavLink</b></li>
                                <li>URL params using <b>useParams</b></li>
                                <li>Redirecting with <b>Navigate</b></li>
                                <li>Return after login using <b>location.state</b></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="glass rounded-4 p-4 shadow-sm">
                        <h3 className="h5 fw-bold">Future improvements</h3>
                        <ul className="text-secondary mb-0">
                            <li>We will add comments section UI</li>
                            <li>Fetching posts from a real API</li>
                            <li>Adding categories page with nested routes</li>
                            <li>Adding dark mode toggle</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;