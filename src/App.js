import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Detail from './pages/Detail/Detail';
import About from './pages/About/About';

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/categories/:name' element={<Categories />}/>
              <Route path='/:catName/:id' element={<Detail />}></Route>
              <Route path='/about' element={<About />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
