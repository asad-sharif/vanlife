import { Outlet, NavLink } from 'react-router-dom'

function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        color: "#161616"
    }
    return (
        <div className="container mx-auto px-8 md:px-12 min-h-[100vh]">
            <nav className='flex gap-4 my-8'>
                <NavLink to='/host' end style={({ isActive }) => isActive ? activeStyles : {}}>Dashboard</NavLink>
                <NavLink to='/host/income' style={({ isActive }) => isActive ? activeStyles : {}}>Income</NavLink>
                <NavLink to='/host/vans' style={({ isActive }) => isActive ? activeStyles : {}}>Vans</NavLink>
                <NavLink to='/host/reviews' style={({ isActive }) => isActive ? activeStyles : {}}>Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
        
    )
}

export default HostLayout