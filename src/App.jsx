import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const LS_AUTH = "mb_auth";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(LS_AUTH);
    if (raw) {
      const parsed = JSON.parse(raw);
      setIsAuth(true);
      setUser(parsed.user);
    }
  }, []);

  function onLogin(userInfo) {
    const data = { user: userInfo, at: Date.now() };
    localStorage.setItem(LS_AUTH, JSON.stringify(data));
    setIsAuth(true);
    setUser(userInfo);
  }

  function onLogout() {
    localStorage.removeItem(LS_AUTH);
    setIsAuth(false);
    setUser(null);
  }

  const layoutProps = useMemo(
    () => ({ isAuth, onLogout }),
    [isAuth]
  );

  return (
    <Routes>
      <Route element={<Layout {...layoutProps} />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;