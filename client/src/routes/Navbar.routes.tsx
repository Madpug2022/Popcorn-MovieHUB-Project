import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/non-styled/NavBar/NavBar';
import FeaturedPage from '../pages/FeaturedPage/FeaturedPage';
import MoviePage from '../pages/MoviePage/MoviePage';
import SearchPage from '../pages/SearchPage/SearchPage';
import PopCornPage from '../pages/popcornPage/PopcornPage';
import Login from '../pages/LoginPage/Login';
import PrivateRoute from '../components/non-styled/PrivateRoutes/PrivateRoute';

const NavbarRoutes = () => {
    return (
        <>

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={<FeaturedPage />} />
                    <Route path="/movies/:id" element={<PrivateRoute />}>
                        <Route path="/movies/:id" element={<MoviePage name={'Movies'} />} />
                    </Route>
                    <Route path="/series/:id" element={<PrivateRoute />}>
                        <Route path="/series/:id" element={<MoviePage name={'Series'} />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/popcorn' element={<PopCornPage />} />
                    <Route path='/FAQ' element={<div>FAQ</div>} />
                    <Route path='/searchPage' element={<SearchPage />} />
                    <Route path="/search/:id" element={<MoviePage name={'All'} />} />
                    <Route path='/*' element={<div>404 not found</div>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default NavbarRoutes;
