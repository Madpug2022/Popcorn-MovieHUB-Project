import { useState, useEffect, CSSProperties, lazy, Suspense, useReducer } from "react";
import { SpinnerCircular } from 'spinners-react';
import { fetchData } from "../../api/fetchApi";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import UploadBtn from "../../components/styled/UploadBtn";
import MediaModal from "../../components/styled/MediaModal";
import MovieDetailsModal from "../../components/styled/MovieDetailsModal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MoviePage.css'

const LazyMovieComponent = lazy(() => import("../../components/styled/MovieComponent"))
interface GenreType {
    id?: string;
    name: string;
    moviesId?: string[]
}
export interface MovieType {
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
    const [detailsModal, setDetailsModal] = useState(false);
    const [modalData, setModalData] = useState<string>('');

    const { name } = props;


    const [genresData, setGenresData] = useState<GenreType[]>([]);
    const [userMovies, setUserMovies] = useState<MovieType[]>([]);
    const [userSeries, setUserSeries] = useState<MovieType[]>([]);
    const [combinedMedia, setCombinedMedia] = useState<MovieType[]>([]);
    const [filter, dispatch] = useReducer(reducer, 'All');
    const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);
    const [filteredSeries, setFilteredSeries] = useState<MovieType[]>([]);
    const [filteredCombined, setFilteredCombined] = useState<MovieType[]>([]);
    const [movieData, setMovieData] = useState<MovieType[]>([]);
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
            setUserSeries(data.series);
            setCombinedMedia([...data.movies, ...data.series]);
        }
        fetchMovies();
        const fetchInterval = setInterval(() => fetchMovies(), 5000);
        return () =>
            clearInterval(fetchInterval);
    }, []);

    useEffect(() => {
        setFilteredMovies(userMovies.filter((movie) => movie.genre.name == filter));
        setFilteredSeries(userSeries.filter((series) => series.genre.name == filter));
        setFilteredCombined(combinedMedia.filter((combined) => combined.genre.name == filter));
    }, [filter])

    return (
        <>
            <main className="movie-page-container">
                <div className='movie-pc-left'>
                    <div className='mpl-title'>
                        <h2>{name}</h2>
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
                        <UploadBtn disabled={detailsModal ? true : false} onClick={() => { setModalOpen(!modalOpen), setModalData('movies') }}>
                            {modalOpen ? 'Close' : 'Upload Movie'}
                        </UploadBtn>}
                    {name === 'Series' &&
                        <UploadBtn disabled={detailsModal ? true : false} onClick={() => { setModalOpen(!modalOpen), setModalData('series') }}>
                            {modalOpen ? 'Close' : 'Upload Series'}
                        </UploadBtn>}
                </div>
                <div className='movie-pc-right'>
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
                    {name == 'Movies' ? (filter == 'All' ? (userMovies.map((movie) => {
                        return (
                            <Suspense key={movie.id} fallback={<SpinnerCircular
                                size={75}
                                color="#f1f1f1" />}
                            >
                                <LazyMovieComponent
                                    id={movie.id}
                                    genres={movie.genre.name}
                                    name={movie.name}
                                    critique={movie.critique}
                                    poster_img={movie.poster_image}
                                    score={movie.score}
                                    setDetailsModal={setDetailsModal}
                                    setMovieData={setMovieData}
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
                                    critique={movie.critique}
                                    name={movie.name}
                                    poster_img={movie.poster_image}
                                    score={movie.score}
                                    setDetailsModal={setDetailsModal}
                                    setMovieData={setMovieData}
                                />

                            </Suspense>
                        )
                    })

                    )) : name == 'Series' ?
                        (filter == 'All' ? (userSeries.map((movie) => {
                            return (
                                <Suspense key={movie.id} fallback={<SpinnerCircular
                                    size={75}
                                    color="#f1f1f1" />}
                                >
                                    <LazyMovieComponent
                                        id={movie.id}
                                        genres={movie.genre.name}
                                        name={movie.name}
                                        critique={movie.critique}
                                        poster_img={movie.poster_image}
                                        score={movie.score}
                                        setDetailsModal={setDetailsModal}
                                        setMovieData={setMovieData}
                                    />

                                </Suspense>
                            )
                        })) : (filteredSeries.map((movie) => {
                            return (
                                <Suspense key={movie.id} fallback={<SpinnerCircular
                                    size={75}
                                    color="#f1f1f1" />}>
                                    <LazyMovieComponent
                                        id={movie.id}
                                        genres={movie.genre.name}
                                        critique={movie.critique}
                                        name={movie.name}
                                        poster_img={movie.poster_image}
                                        score={movie.score}
                                        setDetailsModal={setDetailsModal}
                                        setMovieData={setMovieData}
                                    />

                                </Suspense>
                            )
                        })

                        )) : (filter == 'All' ? (combinedMedia.map((movie) => {
                            return (
                                <Suspense key={movie.id} fallback={<SpinnerCircular
                                    size={75}
                                    color="#f1f1f1" />}
                                >
                                    <LazyMovieComponent
                                        id={movie.id}
                                        genres={movie.genre.name}
                                        name={movie.name}
                                        critique={movie.critique}
                                        poster_img={movie.poster_image}
                                        score={movie.score}
                                        setDetailsModal={setDetailsModal}
                                        setMovieData={setMovieData}
                                    />

                                </Suspense>
                            )
                        })) : (filteredCombined.map((movie) => {
                            return (
                                <Suspense key={movie.id} fallback={<SpinnerCircular
                                    size={75}
                                    color="#f1f1f1" />}>
                                    <LazyMovieComponent
                                        id={movie.id}
                                        genres={movie.genre.name}
                                        critique={movie.critique}
                                        name={movie.name}
                                        poster_img={movie.poster_image}
                                        score={movie.score}
                                        setDetailsModal={setDetailsModal}
                                        setMovieData={setMovieData}
                                    />

                                </Suspense>
                            )
                        })

                        ))
                    }
                    {modalOpen && <MediaModal genresOptions={genresData} modalData={modalData} setModalOpen={setModalOpen} />}
                    {detailsModal && <MovieDetailsModal modalData={name} setDetailsModal={setDetailsModal} movieData={movieData} />}
                </div>

            </main>
        </>
    );
};

export default MoviePage;
