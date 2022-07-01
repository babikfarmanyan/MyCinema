import Slider from '../../components/Slider/Slider';
import CategoryList from '../../components/CategoryList/CaregoryList';

const Home = () => {
    return (
        <>
            <Slider />
            <CategoryList catName={'movies'} />
        </>
    )
}

export default Home