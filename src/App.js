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
    <section className='App'>
      <Router>
        <Header/>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/categories/:name' element={<Categories />}/>
              <Route path='/watch/:id' element={<Detail />}></Route>
              <Route path='/registration' element={<Registration/>}></Route>
          </Routes>
        <Footer/>
      </Router>
    </section>
  );
}

export default App;
