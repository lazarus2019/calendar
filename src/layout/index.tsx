import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Link to="/">Home</Link>-<Link to="/courses">Course List</Link>-
      <Link to="/courses/detail/1">Course Detail</Link>-
      <Outlet />
    </div>
  )
}

export default Layout
