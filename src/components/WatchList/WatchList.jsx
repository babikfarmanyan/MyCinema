import WatchItem from "./WatchItem";
import './WatchList.css'

const WatchList = ({watchItems, name, genres, startYear, endYear, fetchGenres, page}) => {
  return (
    <div className="watch-list">
        {
            watchItems.length === 0 ? 'Nothing found :(': watchItems.map((item, index) => (
              <WatchItem key={index} item={item} name={name} genres={genres} startYear={startYear} endYear={endYear} fetchGenres={fetchGenres} page={page}/>
          ))
        }
    </div>
  )
}

export default WatchList