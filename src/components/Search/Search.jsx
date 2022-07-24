import { useState, useEffect } from "react";
import { searchMovie, searchSerial, getGenres } from "../../config";

import SearchItem from "./SearchItem";
import Loading from "../Loading";
import "./Search.css";

const Search = ({showSearch, setShowSearch}) => {

    const [value, setValue] = useState('');
    const [watchItems, setWatchItems] = useState([]);
    const [genres, setGenres] = useState([]);
    const [id, setId] = useState(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Promise.all(
            [
                getGenres('movie'),
                getGenres('tv')
            ]
        ).then(response => {
            response.forEach(data => setGenres(data.genres))
        })
    }, [])

    useEffect(() => {
        if (id !== undefined) {
            clearInterval(id);
        }
        if (value !== '') {
            setLoading(true);
            setId(
                setTimeout(() => {
                    Promise.all(
                        [
                            searchMovie(value),
                            searchSerial(value)
                        ]
                    ).then(response => {
                        const confData = [];
        
                        response.map(data => {
                            confData.push(...data.results.slice(0, 5));
                        })

                        return confData.filter(item => item.poster_path !== null)
                    }).then(confData => {
                        setLoading(false);
                        setWatchItems(confData);
                    });
                }, 1000)
            )
        }else setLoading(false);
    }, [value])

  return (
    <div className="search">
        <i className="fas fa-times" onClick={() => setShowSearch(false)}></i>
        <div className="search-box">
            <h1>Search</h1>
            <input type="search" value={value} onChange={(event) => setValue(event.target.value)} style={{display: showSearch ? 'initial': 'none'}} className="header__search" placeholder="Search..."/>
            
            {
                loading ? <Loading /> : <div className="search__list">
                {
                    watchItems.length === 0 && value !== '' ? 'Nothing found :(': watchItems.map(watchItem => (
                        <SearchItem key={watchItem.id} watchItem={watchItem} setShowSearch={setShowSearch} genres={genres} />
                    ))
                }
            </div>
            }
        </div>
    </div>
  )
}

export default Search