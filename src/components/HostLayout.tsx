import { Outlet, NavLink } from 'react-router-dom'

function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        color: "#161616",
        textDecoration: 'underline'
      }
    return (
        <div className="container mx-auto px-4 min-h-[100vh]">
            <nav className='flex gap-4 my-8'>
                <NavLink to='/host' end style={({ isActive }) => isActive ? activeStyles : {}}>Dashboard</NavLink>
                <NavLink to='income' style={({ isActive }) => isActive ? activeStyles : {}}>Income</NavLink>
                <NavLink to='vans' style={({ isActive }) => isActive ? activeStyles : {}}>Vans</NavLink>
                <NavLink to='reviews' style={({ isActive }) => isActive ? activeStyles : {}}>Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
        
    )
}

export default HostLayout