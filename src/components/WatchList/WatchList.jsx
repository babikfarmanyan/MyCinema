import WatchItem from "./WatchItem";
import './WatchList.css'

const WatchList = ({watchItems, name, genres}) => {
  return (
    <div className="watch-list">
        {
            watchItems.map((item, index) => (
                <WatchItem key={index} item={item} name={name} genres={genres} />
            ))
        }
    </div>
  )
}

export default WatchList