import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from "../../../assets/resources/Logo Popcorn.jpg"
import { PiPersonArmsSpreadBold } from "react-icons/pi";
import SearchButton from '../../styled/SearchButton';


interface LinkType {
    id: number
    to: string
    name: string
}

const userTesting =
{
    id: 1,
    name: 'test'
}


const linksLeft: LinkType[] = [
    {
        id: 1,
        to: `/movies/${userTesting.id}`,
        name: 'Movies'
    },
    {
        id: 2,
        to: '/login',
        name: 'Series'
    }
]
const linksRigth: LinkType[] = [
    {
        id: 1,
        to: '/login',
        name: 'Hungry?'
    },
    {
        id: 2,
        to: '/login',
        name: 'FAQs'
    }
]

const NavBar = () => {
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
                <SearchButton />
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
                    {linksRigth.map(link => {
                        return (
                            <li key={link.id}>
                                <Link className='nav-link' to={link.to}>{link.name}</Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
            <div className='rigth-nav'>
                <Link to={'/login'} style={{ color: '#f1f1f1', textDecoration: 'none' }}>
                    <PiPersonArmsSpreadBold />
                </Link>

            </div>
        </nav>
    )
}
export default NavBar
