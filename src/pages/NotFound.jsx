import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="container py-5">
            <div className="text-center">
                <div className="display-1 fw-bold">404</div>
                <p className="lead text-secondary">That page doesn’t exist.</p>
                <Link className="btn btn-primary rounded-pill px-4" to="/">
                    Go Home
                </Link>
            </div>
        </section>
    );
}

export default NotFound;