import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ isAuth, onLogout }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar isAuth={isAuth} onLogout={onLogout} />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;