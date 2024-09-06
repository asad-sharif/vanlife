import { Link, NavLink } from 'react-router-dom'

function Header() {
    const activeStyles = {
        fontWeight: "bold",
        color: "#161616",
        textDecoration: 'underline'
      }

    return (
        <header className='flex justify-between items-center py-2 px-4 md:px-12 lg:px-20 border-b-2'>
            <Link to='/' className='text-2xl font-extrabold text-[#FF8C38]'>#VANLIFE</Link>
            <nav className='flex gap-x-4'>
                <NavLink
                    to='/host'
                    style={({ isActive }) => isActive ? activeStyles : {}}>
                    Host
                </NavLink>

                <NavLink
                    to='/vans'
                    style={({ isActive }) => isActive ? activeStyles : {}}>
                    Vans
                </NavLink>

                <NavLink
                    to='/about'
                    style={({ isActive }) => isActive ? activeStyles : {}}>
                    About
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
