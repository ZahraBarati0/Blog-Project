export const posts = [
    {
        id: "react-router",
        title: "React Router v7: Nested Routes That Actually Scale",
        excerpt:
            "Build layouts once, render the right content with Outlet, and keep navigation clean as your app grows.",
        tag: "Routing",
        date: "2026-01-18",
        readTime: "6 min",
        cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
        content: [
            "Nested routes let you create a dashboard-like layout and swap only the inner content. You build the shell once (navbar, sidebar, footer), then render route-specific UI inside <Outlet />.",
            "Use <NavLink /> to automatically style the active link. For modern UX, keep links consistent and predictable.",
            "When you need to redirect a user after login, store the intended route in location.state and navigate back after authentication.",
            "Pro tip: Keep your route structure close to your folder structure. It makes your app easier to maintain and teach.",
        ],
    },
    {
        id: "bootstrap-ui",
        title: "Make it Look Expensive: Bootstrap 5 UI Patterns",
        excerpt:
            "Cards, badges, subtle shadows, and spacing. You don’t need custom CSS for 90% of modern UI.",
        tag: "UI",
        date: "2026-01-17",
        readTime: "5 min",
        cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80",
        content: [
            "Bootstrap isn’t just buttons. Use the grid system to create layouts that breathe.",
            "For a modern feel: prefer light borders, rounded corners, and soft shadows instead of heavy outlines.",
            "Keep your typography consistent. Use a strong headline, a muted subtitle, and good spacing.",
            "Small details: badges, breadcrumbs, and hover states make the UI feel professional.",
        ],
    },
    {
        id: "protected-routes",
        title: "Protected Routes: The Clean Pattern",
        excerpt:
            "A tiny wrapper component can protect anything. Redirect to login and return users where they started.",
        tag: "Auth",
        date: "2026-01-16",
        readTime: "4 min",
        cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
        content: [
            "A ProtectedRoute component checks isAuth. If false, redirect with <Navigate />.",
            "When redirecting, pass the current location inside state so the login page knows where to return.",
            "In real apps, auth usually comes from a token. For this lab, localStorage is enough.",
            "Make logout visible in the navbar—users expect it there.",
        ],
    },
];

export function getPostById(id) {
    return posts.find((p) => p.id === id);
}