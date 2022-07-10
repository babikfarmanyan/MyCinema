import Slider from '../../components/Slider/Slider';
import CategoryList from '../../components/CategoryList/CaregoryList';
import About from '../../components/About/About';

const Home = () => {
    return (
        <>
            <Slider />
            <CategoryList catName={'movies'} topRated={true} />
            <CategoryList catName={'movies'} />
            <About about={'about'} />
            <CategoryList catName={'serials'} topRated={true} />
            <CategoryList catName={'serials'} />
        </>
    )
}

export default Home