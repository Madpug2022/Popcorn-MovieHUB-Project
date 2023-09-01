import './searchPage.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchData } from '../../api/fetchApi';
import SearchResult from '../../components/styled/SearchResult';
interface userData {
    picture: string;
    nickname: string;
    movies: string[];
    series: string[];
}
const SearchPage = () => {
    const location = useLocation();
    const searchQuery = location.state.searchQuery;
    const [searchResult, setSearchResult] = useState<userData>()

    const fetchUser = async () => {
        const data = await fetchData(`users/${searchQuery}`)
        setSearchResult(data)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <main className='search-page'>
            <div className='search-results'>
                <div className='sr-top'><h2>Search Results</h2></div>
                <div className='sr-bottom'>
                    <div className='result-container'>
                        {searchResult ? <SearchResult
                            userLogo={searchResult.picture} nickName={searchResult.nickname} movies={searchResult.movies} series={searchResult.series} /> : <div>No user found</div>}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SearchPage
