import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <div className="fixed top-14 right-2 z-100 bg-red-600 text-white text-sm sm:text-xl px-4 py-2 rounded-md">⚠ This project is currently under development</div>
        </>
    )
}

export default Layout