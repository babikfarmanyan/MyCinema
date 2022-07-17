import { getW500Img } from "../../../config";
import {NavLink as Link} from 'react-router-dom';

const WatchItem = ({item, name, genres}) => {

    const originalName = 'name' in item ? item.name: item.title;
    const realiseDate = 'release_date' in item ? item.release_date.slice(0, 4): item.first_air_date.slice(0, 4);

  return (
    <Link to={`/${name}/${item.id}`} className='watch-list__item'>
        <img src={getW500Img(item.poster_path)} alt="" />

        <div className="info">
            <h4>{originalName.length > 17 ?  originalName.slice(0, 18) + '...': originalName}</h4>
            <div className="date-genre">
                {
                genres.map((genre, index) => {
                    if (genre.id === item.genre_ids[0]) {
                        return (
                        <span key={index}>{`${realiseDate} , ${genre.name}`}</span>
                        )
                    }
                })
                }
            </div>
        </div>
    </Link>
  )
}

export default WatchItem