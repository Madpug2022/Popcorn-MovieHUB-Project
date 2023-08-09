import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState, useEffect, CSSProperties } from "react";
import { fetchData } from "../../api/fetchApi";
import ClipLoader from "react-spinners/ClipLoader"
import './MoviePage.css'

interface GenreType {
    id: string;
    name: string;
    moviesId?: string[]
}
const override: CSSProperties = {
    display: "block",
    margin: "auto",
};

const MoviePage = () => {
    const [watched, setWatched] = useState(false);
    const [genresData, setGenresData] = useState<GenreType[]>([]);
    const [loadingGenres, setLoadingGenres] = useState(false);

    useEffect(() => {
        const fetchGenres = async () => {
            const data = await fetchData('genres');
            setGenresData(data);
            setLoadingGenres(false); // Move this line inside the fetch completion
        };

        setLoadingGenres(true);
        fetchGenres();
    }, []);

    return (
        <main className="movie-page-container">
            <div className='movie-pc-left'>
                <div className='mpl-title'>
                    <h2>Movies</h2>
                    <button className="togle-watched-btn" onClick={() => setWatched(!watched)}>
                        {watched ? (<AiFillEyeInvisible style={{ color: '#C41C19' }} />) : (<AiFillEye />)}
                    </button>
                </div>
                {loadingGenres ? (
                    <ClipLoader
                        color={'#f1f1f1'}
                        loading={loadingGenres}
                        cssOverride={override}
                        size={75}
                    />
                ) : (
                    <div className='category-container'>
                        {genresData.map(genres => (
                            <button className='category-btn' value={genres.name} key={genres.id}>{genres.name}</button>
                        ))}
                    </div>
                )}
            </div>
            <div className='movie-pc-right'>

            </div>
        </main>
    );
};

export default MoviePage;
