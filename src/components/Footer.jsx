import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="mt-auto border-top bg-white">
            <div className="container py-4 d-flex flex-column flex-md-row gap-2 justify-content-between align-items-md-center">
                <div className="text-secondary">
                    © {new Date().getFullYear()} ModernBlog • Built by Zahra Barati
                </div>
                <div className="d-flex gap-3">
                    <Link className="text-secondary" to="/">
                        Home
                    </Link>
                    <Link className="text-secondary" to="/blog">
                        Blog
                    </Link>
                    <Link className="text-secondary" to="/about">
                        About
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;