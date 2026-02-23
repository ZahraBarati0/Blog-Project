import { useMemo, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

function Login({ onLogin }) {
    const navigate = useNavigate();
    const location = useLocation();

    const from = () => location.state?.from?.pathname || "/dashboard";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!email.includes("@") || password.length < 4) {
            setError("Use a valid email and a password with 4+ characters.");
            return;
        }

        onLogin({ email });
        navigate(from, { replace: true });
    }

    return (
        <section className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6">
                    <div className="card rounded-4 shadow-sm overflow-hidden">
                        <div className="p-4 p-lg-5">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                            <h2 className="fw-bold mb-0">Login</h2>
                            <span className="badge text-bg-light border rounded-pill">Demo auth</span>
                        </div>

                        <p className="text-secondary">
                            You must login to access the dashboard. After login, you’ll be
                            redirected back to:
                            <span className="ms-2 badge text-bg-light border rounded-pill code-pill">
                                {from}
                            </span>
                        </p>

                        {error && (
                            <div className="alert alert-danger rounded-4">{error}</div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-3">
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    className="form-control form-control-lg rounded-4"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control form-control-lg rounded-4"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••"
                                    />
                                    <div className="form-text">
                                        Tip: any 4+ character password works.
                                    </div>
                                </div>

                                <button className="btn btn-primary btn-lg rounded-pill w-100" type="submit">
                                    Login
                                </button>

                                <div className="text-center mt-3">
                                    <Link className="text-secondary" to="/blog">
                                        ← Back to Blog
                                    </Link>
                                </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;