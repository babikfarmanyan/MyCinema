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

  function addInLocalStorage(obj) {
    const data = JSON.parse(localStorage.getItem('favorites'));
    if (data) {
      localStorage.setItem("favorites",JSON.stringify(
        [
          obj,
          ...data 
        ]
      ))
    }else localStorage.setItem('favorites', JSON.stringify([obj]));
  }

  function removeFromLocalStorage(id) {
    const data = JSON.parse(localStorage.getItem('favorites'));
    const filteredData = data.filter(item => item.id != id);
    localStorage.setItem('favorites', JSON.stringify(filteredData));
    
  }

  function check(id){
    const data = JSON.parse(localStorage.getItem('favorites'));
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
              <Route path='/favorites' element={<Favorites />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
