import Slider from '../../components/Slider';
import CategoryList from '../../components/CategoryList';
import ShowAbout from '../../components/ShowAbout';

const Home = () => {
    localStorage.removeItem('watchListMemory');
    return (
        <>
            <Slider />
            <CategoryList catName={'movies'} topRated={true} />
            <CategoryList catName={'movies'} />
            <ShowAbout about={'about'} />
            <CategoryList catName={'serials'} topRated={true} />
            <CategoryList catName={'serials'} />
        </>
    )
}

export default Home