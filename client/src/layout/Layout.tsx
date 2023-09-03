import NavbarRoutes from "../routes/Navbar.routes";
import { Outlet } from 'react-router-dom'
import { useEffect } from "react";
import Footer from "../components/styled/Footer";
import './layout.css'
import { useAuth0 } from "@auth0/auth0-react";
import postApi from "../api/postApi";


const url = 'http://localhost:8800/users'

const Layout = () => {
    const { user, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        if (user) {
            postApi(url, user, getAccessTokenSilently)
        }
    }, [user])

    return (
        <>

            <NavbarRoutes />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout;
