import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/non-styled/NavBar/NavBar';
import FeaturedPage from '../pages/FeaturedPage/FeaturedPage';
import MoviePage from '../pages/MoviePage/MoviePage';

const NavbarRoutes = () => {
    return (
        <>

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={<FeaturedPage />} />
                    <Route path='/movies/:id' element={<MoviePage name={'Movies'} />} />
                    <Route path='/series/:id' element={<MoviePage name={'Series'} />} />
                    <Route path='/login' element={<div>login</div>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default NavbarRoutes;
