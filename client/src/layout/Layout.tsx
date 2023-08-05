import NavbarRoutes from "../routes/Navbar.routes";
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header>
                <NavbarRoutes />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default Layout;
