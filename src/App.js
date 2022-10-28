import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
// Pages
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Detail from './pages/Detail/Detail';
import About from './pages/About/About';
import Favorites from './pages/Favorites/Favorites';



function App() {

   // add movie in localStorages

  function addInLocalStorage(obj,catName) {
    const data = JSON.parse(localStorage.getItem("favorites"));
    obj.catName=catName;
    if (data) {
      localStorage.setItem("favorites",JSON.stringify(
        [
          obj,
          ...data 
        ]
      ))
    }else localStorage.setItem("favorites", JSON.stringify([obj]));
  }

   // remove movie in localStorages

  function removeFromLocalStorage(id) {
    const data = JSON.parse(localStorage.getItem("favorites"));
    const filteredData = data.filter(item => item.id != id);
    localStorage.setItem("favorites", JSON.stringify(filteredData));
  }
  
  //checks the status of the movie , liked or not liked

  function check(id){
        const data = JSON.parse(localStorage.getItem("favorites"));
    if(data){
    for(let item of data){
      if(item.id == id) return true;
    }
  }
    return false;

  }
  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/categories/:name' element={<Categories />}/>
              <Route path='/:catName/:id' element={<Detail check={check} addInLocalStorage={addInLocalStorage} removeFromLocalStorage={removeFromLocalStorage}/>}></Route>
              <Route path='/about' element={<About />} />
              <Route path='/favorites' element={<Favorites removeFromLocalStorage={removeFromLocalStorage}/>} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
