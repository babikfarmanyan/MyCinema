import Slider from '../../components/Slider/Slider';
import CategoryList from '../../components/CategoryList/CaregoryList';
import ShowAbout from '../../components/ShowAbout';

const Home = () => {
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