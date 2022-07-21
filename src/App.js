import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Detail from './pages/Detail/Detail';
import About from './pages/About/About';
import Favorites from './pages/Favorites/Favorites';

function App() {


  function setFavorites(liked){
    let newFl;
    console.log(liked);
    if(liked) {
    newFl = favoriteList.filter(elem => elem.id !== id);
    console.log(newFl);
    setFavoriteList(newFl);
    localStorage.setItem("favorites", JSON.stringify(newFl));


      console.log(localStorage);
      console.log(favoriteList);
     
    }  else
    {favoriteList.push(watchDetail)
      newFl = favoriteList;
      setFavoriteList(newFl);
      localStorage.setItem("favorites",JSON.stringify(favoriteList));
      setFavoriteList(newFl);
    }
    const setLike =!liked;
    setLiked(setLike);
  } 



  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/categories/:name' element={<Categories />}/>
              <Route path='/:catName/:id' element={<Detail />}></Route>
              <Route path='/about' element={<About />} />
              <Route path='/favorites' element={<Favorites />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
