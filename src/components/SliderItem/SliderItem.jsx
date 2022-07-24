import { getOriginalImg } from '../../config';
import {NavLink as Link} from 'react-router-dom';

import './SliderItem.css';

const SliderItem = ({movie, genres}) => {
  return (
    <div className='slider__item'>
        <img src={getOriginalImg(movie.backdrop_path)} alt="" />
        <div className='slider__item__content'>
            <h3>{movie.original_title}</h3>
            <div className='genres'>
              {
                genres.map(genre => {
                  if (movie.genre_ids.includes(genre.id)) {
                    return (
                      <span key={genre.id}>{genre.name}</span>
                    )
                  }
                })
              }
            </div>
            <Link to={`/movie/${movie.id}`} className='seemore-link'>see more</Link>
        </div>
    </div>
  )
}

export default SliderItem