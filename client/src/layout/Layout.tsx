import NavbarRoutes from "../routes/Navbar.routes";
import { Outlet } from 'react-router-dom'
import Footer from "../components/styled/Footer";
import './layout.css'

const Layout = () => {
    return (
        <>
            <header>
                <NavbarRoutes />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout;
