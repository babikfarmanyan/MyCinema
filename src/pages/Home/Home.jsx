import Slider from '../../components/Slider';
import CategoryList from '../../components/CategoryList';
import ShowAbout from '../../components/ShowAbout';

const Home = () => {
    localStorage.removeItem('watchListMemory');
    return (
        <>
            <Slider />
            <CategoryList catName={'movie'} topRated={true} />
            <CategoryList catName={'movie'} />
            <ShowAbout about={'about'} />
            <CategoryList catName={'tv'} topRated={true} />
            <CategoryList catName={'tv'} />
        </>
    )
}

export default Home