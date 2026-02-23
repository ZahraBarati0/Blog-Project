# ModernBlog – React Router v7 Lab

A modern multi-page blog application built with React and React Router v7.  
This project demonstrates nested layouts, protected routes, URL parameters, and a clean Bootstrap 5 UI.

---

## 🚀 Features

- ✅ Multi-page routing with React Router
- ✅ Layout routes using `<Outlet />`
- ✅ Active navigation with `<NavLink />`
- ✅ URL parameters with `useParams()`
- ✅ Query search params with `useSearchParams()`
- ✅ Protected routes with custom `<ProtectedRoute />`
- ✅ Redirect after login using `location.state`
- ✅ LocalStorage-based demo authentication
- ✅ Responsive UI built with Bootstrap 5
- ✅ 404 Not Found page

---

## 🛠 Tech Stack

- React
- React Router v7
- Bootstrap 5
- LocalStorage (for demo authentication)

---

## 🔐 Authentication Flow

- User attempts to access `/dashboard`
- If not authenticated → redirected to `/login`
- After login → redirected back to intended page
- Auth state stored in `localStorage`

---

## 📸 Screens Included

- Homepage with hero section
- Blog listing with search
- Blog details page (URL param demo)
- Protected dashboard
- Login page with redirect flow
- 404 page

---

## 📦 Installation

```bash
npm install
npm run dev
```

---
## 🎯 Learning Goals

This project focuses on:

Nested routing patterns

Clean route architecture

Protected route patterns

Real-world navigation flow

Clean UI with Bootstrap
