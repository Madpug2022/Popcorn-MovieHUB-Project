import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeaturedPage from '../pages/FeaturedPage/FeaturedPage';

const NavbarRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeaturedPage />} />
                <Route path='/login' element={<div>login</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavbarRoutes;
