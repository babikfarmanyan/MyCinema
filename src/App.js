import './App.css';
import {useState, useEffect} from 'react';
import {getOriginalImg, getW500Img} from './config'

function App() {

  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   getMostPopularMovies().then(data => {
  //     setMovies(data.results.slice(0, 6))
  //   })
  // }, [])
  return (
    <div className="App">
      {/* {
        movies.map(movie => (
          <p key={movie.id}>{movie.id}</p>
        ))
      } */}
      <img src={getW500Img('/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg')}></img>
    </div>
  );
}

export default App;
