import './popcornPage.css';
import { fetchData } from '../../api/fetchApi';
import { useState, useEffect } from 'react'
import banner from '../../assets/resources/popcorn-box-cinema-movie-concept_916191-31862.avif'
import UploadBtn from '../../components/styled/UploadBtn';
import { useAuth0 } from '@auth0/auth0-react';
import RecipeModal from '../../components/styled/RecipeModal';
import { SpinnerCircular } from 'spinners-react';
import RecipeCard from '../../components/styled/RecipeCard';
import { ToastContainer } from 'react-toastify';

interface RecipeType {
    id?: string;
    name: string;
    image: string;
    image_id?: string;
    type: string;
    user: UserType;
    link: string;
}
interface UserType {
    nickname: string;
}
const PopCornPage = () => {
    const [focused, setFocused] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [recipes, setRecipes] = useState<RecipeType[]>([]);
    const [loading, setLoading] = useState(false);
    const { isAuthenticated } = useAuth0();
    const [filter, setFilter] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState<RecipeType[]>([])

    const getData = async () => {
        setLoading(true);
        const data = await fetchData('recipes')
        setRecipes(data);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        if (filter.trim() !== '') {
            setFilteredRecipes(recipes.filter((recipe) => recipe.name == filter));
        }
    }, [filter])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <main className='popcorn-page'>

                <div className={`popc-searchbar ${focused ? 'focused' : ''}`}>
                    <input
                        type="text"
                        placeholder='Filter the recipes'
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />

                </div>
                <div className='popc-c-container'>
                    <div className='popc-container'>
                        {loading ? <SpinnerCircular /> : filter !== '' ? filteredRecipes.map((recipe) => {
                            return (
                                <RecipeCard key={recipe.id}
                                    id={recipe.id}
                                    name={recipe.name}
                                    image={recipe.image}
                                    type={recipe.type}
                                    link={recipe.link}
                                    user={recipe.user.nickname}
                                    setLoading={setLoading}
                                    getData={getData}
                                />
                            )
                        }) : recipes.map((recipe) => {
                            return (
                                <RecipeCard key={recipe.id}
                                    id={recipe.id}
                                    name={recipe.name}
                                    image={recipe.image}
                                    type={recipe.type}
                                    link={recipe.link}
                                    user={recipe.user.nickname}
                                    setLoading={setLoading}
                                    getData={getData}
                                />
                            )
                        })}
                    </div>
                    <div className='popc-btn-container'>
                        <UploadBtn disabled={isAuthenticated ? false : true} onClick={() => setOpenModal(!openModal)}>{openModal ? 'Close' : 'Upload recipe'}</UploadBtn>
                        {!isAuthenticated && <p>Please log in to upload your recipes!</p>}
                    </div>
                </div>
                <div className='popc-logo'>
                    {openModal ? <RecipeModal setOpenModal={setOpenModal} getData={getData} /> : <img src={banner} alt="Popcorn banner" />}
                </div>
            </main>
        </>
    )
}
export default PopCornPage
