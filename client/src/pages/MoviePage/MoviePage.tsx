import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState, useEffect, CSSProperties } from "react";
import { fetchData } from "../../api/fetchApi";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import UploadBtn from "../../components/styled/UploadBtn";
import MovieComponent from "../../components/styled/MovieComponent";
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
interface PageType {
    name: string;
}

const MoviePage = (props: PageType) => {
    const { name } = props;

    const [watched, setWatched] = useState(false);
    const [genresData, setGenresData] = useState<GenreType[]>([]);
    const [loadingGenres, setLoadingGenres] = useState(false);
    const params = useParams();

    useEffect(() => {
        const fetchGenres = async () => {
            const data = await fetchData('genres');
            setGenresData(data);
            setLoadingGenres(false);
        };

        setLoadingGenres(true);
        fetchGenres();
        console.log(params)
    }, []);

    return (
        <main className="movie-page-container">
            <div className='movie-pc-left'>
                <div className='mpl-title'>
                    <h2>{name}</h2>
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
                {name === 'Movies' &&
                    <UploadBtn>
                        Upload Movie
                    </UploadBtn>}
                {name === 'Series' &&
                    <UploadBtn>
                        Upload Series
                    </UploadBtn>}
            </div>
            <div className='movie-pc-right'>

            </div>
        </main>
    );
};

export default MoviePage;
