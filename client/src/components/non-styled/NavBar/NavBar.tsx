import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import logo from "../../../assets/resources/Logo Popcorn.jpg"
import { PiPersonArmsSpreadBold } from "react-icons/pi";
import SearchButton from '../../styled/SearchButton';
import { useAuth0 } from "@auth0/auth0-react";
import { SpinnerCircular } from 'spinners-react';

const NavBar = () => {
    const { loginWithRedirect, isAuthenticated, logout, user, isLoading } = useAuth0()

    const userId = user?.nickname

    const linksLeft = useMemo(() => [
        {
            id: 1,
            to: `/movies/${userId}`,
            name: 'Movies'
        },
        {
            id: 2,
            to: `/series/${userId}`,
            name: 'Series'
        }
    ], [userId]);

    const linksRight = useMemo(() => [
        {
            id: 1,
            to: '/popcorn',
            name: 'Hungry?'
        },
        {
            id: 2,
            to: '/FAQ',
            name: 'FAQs'
        }
    ], []);

    const [isScrolled, setIsScrolled] = useState(false);
    const [notOnMain, setNotOnMain] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    return (
        <nav className="navigation-bar" style={isScrolled || notOnMain ? { backgroundColor: 'black' } : { backgroundColor: '' }}>
            <div className='left-nav'>
                <SearchButton setNotOnMain={setNotOnMain} />
            </div>
            <div className="center-nav">
                <ul className='nav-links'>
                    {linksLeft.map(link => {
                        return (
                            <li key={link.id}>
                                <Link className='nav-link' to={link.to} onClick={() => { setNotOnMain(true) }}>{link.name}</Link>
                            </li>
                        )
                    })}
                </ul>
                <img src={logo} alt='logo-popcorn' onClick={() => { navigate('/'); setNotOnMain(false) }} style={isScrolled || notOnMain ? { display: 'block' } : { display: 'none' }} />
                <ul className='nav-links'>
                    {linksRight.map(link => {
                        return (
                            <li key={link.id}>
                                <Link className='nav-link' to={link.to} onClick={() => { setNotOnMain(true) }}>{link.name}</Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
            {isLoading ? <SpinnerCircular
                size={40}
                color="#f1f1f1" /> : <div className='rigth-nav'>
                {isAuthenticated && <><button className='logout-btn' onClick={() => logout()}>
                    LOGOUT
                </button>
                    <img src={user?.picture} alt='user-logo' className='user-logo' /></>
                }
                {!isAuthenticated && <button className='login-btn' onClick={() => loginWithRedirect()}>
                    <PiPersonArmsSpreadBold />
                </button>}

            </div>}
        </nav>
    )
}
export default NavBar
