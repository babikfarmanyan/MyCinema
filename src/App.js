import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// Pages
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Detail from './pages/Detail/Detail';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/categories/:name' element={<Categories />}/>
              <Route path='/movie/:id' element={<Detail />}></Route>
              <Route path='/registration' element={<Registration/>}></Route>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
