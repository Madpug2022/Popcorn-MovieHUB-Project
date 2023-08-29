import './popcornPage.css';
import { useState } from 'react'
import banner from '../../assets/resources/popcorn-box-cinema-movie-concept_916191-31862.avif'
import UploadBtn from '../../components/styled/UploadBtn';
import { useAuth0 } from '@auth0/auth0-react';
import RecipeCard from '../../components/styled/RecipeCard';

interface RecipeType {
    id?: string;
    name: string;
    image: string;
    image_id?: string;
    type: string;
    user: string;
    link: string;
}
const recipe: RecipeType = {
    name: 'test',
    image: banner,
    type: 'salty',
    user: 'matias.chiappa',
    link: 'http://google.com'
}
const PopCornPage = () => {
    const [focused, setFocused] = useState(false);
    const { isAuthenticated } = useAuth0();
    return (
        <main className='popcorn-page'>
            <div className={`popc-searchbar ${focused ? 'focused' : ''}`}>
                <input
                    type="text"
                    placeholder='Filter the recipes'
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />

            </div>
            <div className='popc-c-container'>
                <div className='popc-container'>

                    <RecipeCard
                        name={recipe.name}
                        image={recipe.image}
                        type={recipe.type}
                        user={recipe.user}
                        link={recipe.link}
                    />

                </div>
                <div className='popc-btn-container'>
                    <UploadBtn disabled={isAuthenticated ? false : true}>Upload recipe</UploadBtn>
                    {!isAuthenticated && <p>Please log in to upload your recipes!</p>}
                </div>
            </div>
            <div className='popc-logo'>
                <img src={banner} alt="Popcorn banner" />
            </div>
        </main>
    )
}
export default PopCornPage
