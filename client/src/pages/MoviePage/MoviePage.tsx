import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState, useEffect, CSSProperties, lazy, Suspense, useReducer } from "react";
import { SpinnerCircular } from 'spinners-react';
import { fetchData } from "../../api/fetchApi";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import UploadBtn from "../../components/styled/UploadBtn";
import MediaModal from "../../components/styled/MediaModal";
import './MoviePage.css'

const LazyMovieComponent = lazy(() => import("../../components/styled/MovieComponent"))
interface GenreType {
    id?: string;
    name: string;
    moviesId?: string[]
}
interface MovieType {
    id: string;
    name: string;
    poster_image: string;
    poster_image_id: string;
    score: number;
    critique: string;
    genre: GenreType;
}
const override: CSSProperties = {
    display: "block",
    margin: "auto",
};
interface PageType {
    name: string;
}
const reducer = (filter: any, action: any) => {
    switch (action.type) {
        case 'SET_ALL':
            return 'All';
        case 'SET_ACTION':
            return 'Action';
        case 'SET_CRIME':
            return 'Crime';
        case 'SET_DRAMA':
            return 'Drama';
        case 'SET_FANTASY':
            return 'Fantasy';
        case 'SET_HORROR':
            return 'Horror';
        case 'SET_COMEDY':
            return 'Comedy';
        case 'SET_ROMANCE':
            return 'Romance';
        case 'SET_SCIENCE FICTION':
            return 'Science Fiction';
        case 'SET_SPORTS':
            return 'Sports';
        case 'SET_THRILLER':
            return 'Thriller';
        case 'SET_MISTERY':
            return 'Mistery';
        case 'SET_WAR':
            return 'War';
        case 'SET_WESTERN':
            return 'Western';
        default:
            return filter;
    }
};
const MoviePage = (props: PageType) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState<string>('');

    const { name } = props;

    const [watched, setWatched] = useState(false);
    const [genresData, setGenresData] = useState<GenreType[]>([]);
    const [userMovies, setUserMovies] = useState<MovieType[]>([]);
    const [filter, dispatch] = useReducer(reducer, 'All');
    const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);
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
        const fetchMovies = async () => {
            const data = await fetchData(`users/${params.id}`);
            setUserMovies(data.movies);
        }
        fetchMovies();
        const fetchInterval = setInterval(() => fetchMovies(), 5000);
        return () =>
            clearInterval(fetchInterval);
    }, []);

    useEffect(() => {
        setFilteredMovies(userMovies.filter((movie) => movie.genre.name == filter));
    }, [filter])

    return (
        <>
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
                                <button className={filter == genres.name ? 'category-btn-selected' : 'category-btn'}
                                    onClick={() => dispatch(filter == 'All' ? { type: `SET_${genres.name.toUpperCase()}` } : filter == genres.name ? { type: `SET_ALL` } : { type: `SET_${genres.name.toUpperCase()}` })} value={genres.name} key={genres.id}>{genres.name}</button>
                            ))}
                        </div>
                    )}
                    {name === 'Movies' &&
                        <UploadBtn onClick={() => { setModalOpen(!modalOpen), setModalData('movies') }}>
                            {modalOpen ? 'Close' : 'Upload Movie'}
                        </UploadBtn>}
                    {name === 'Series' &&
                        <UploadBtn onClick={() => { setModalOpen(!modalOpen), setModalData('series') }}>
                            {modalOpen ? 'Close' : 'Upload Series'}
                        </UploadBtn>}
                </div>
                <div className='movie-pc-right'>
                    {name == 'Movies' ? (filter == 'All' ? (userMovies.map((movie) => {
                        return (
                            <Suspense key={movie.id} fallback={<SpinnerCircular
                                size={75}
                                color="#f1f1f1" />}>
                                <LazyMovieComponent
                                    id={movie.id}
                                    genres={movie.genre.name}
                                    name={movie.name}
                                    poster_img={movie.poster_image}
                                    score={movie.score}
                                />

                            </Suspense>
                        )
                    })) : (filteredMovies.map((movie) => {
                        return (
                            <Suspense key={movie.id} fallback={<SpinnerCircular
                                size={75}
                                color="#f1f1f1" />}>
                                <LazyMovieComponent
                                    id={movie.id}
                                    genres={movie.genre.name}
                                    name={movie.name}
                                    poster_img={movie.poster_image}
                                    score={movie.score}
                                />

                            </Suspense>
                        )
                    })

                    )) : <></>
                    }
                    {modalOpen && <MediaModal genresOptions={genresData} modalData={modalData} setModalOpen={setModalOpen} />}
                </div>

            </main>
        </>
    );
};

export default MoviePage;
