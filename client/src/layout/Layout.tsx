import NavbarRoutes from "../routes/Navbar.routes";
import { Outlet } from 'react-router-dom'
import { useEffect } from "react";
import Footer from "../components/styled/Footer";
import './layout.css'
import { useAuth0 } from "@auth0/auth0-react";

const Layout = () => {
    const { user } = useAuth0();

    useEffect(() => {
        if (user) {
            console.log(user)
        }
    }, [user])

    return (
        <>

            <NavbarRoutes />
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout;
