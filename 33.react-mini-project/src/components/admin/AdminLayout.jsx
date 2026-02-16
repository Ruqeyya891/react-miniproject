import { NavLink, Outlet } from "react-router-dom"

function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={{
        width: "250px",
        background: "#111",
        color: "#fff",
        padding: "20px"
      }}>
        <h2>Admin</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink to="/admin" style={{ color: "#fff" }}>
            Dashboard
          </NavLink>

          <NavLink to="/admin/products" style={{ color: "#fff" }}>
            Products
          </NavLink>

          <NavLink to="/admin/blogs" style={{ color: "#fff" }}>
            Blogs
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main style={{ flex: 1, padding: "30px" }}>
        <Outlet />
      </main>

    </div>
  )
}

export default AdminLayout
