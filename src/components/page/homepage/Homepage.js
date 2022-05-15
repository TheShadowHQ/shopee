import "./Homepage.scss";
import Header from "../../shared/header/Header";
import Carousel from "../../ui/carousel/Carousel";
import Category from "../../ui/category/Category";
import FlashSale from "../../ui/flash-sale/Flash-sale";
import Trending from "../../ui/trending/Trending";
import Suggestion from "../../ui/suggestion/Suggestion";
import Footer from "../../shared/footer/Footer";

const Home = (props) => {
    const logoutHandler = () => {
        props.logoutHeaderBroastCast(false);
    };

    return (
        <>
            <Header logoutBroastCast={logoutHandler} />
            <Carousel/>
            <main className="bg-gray py-4">
                <Category />
                <FlashSale />
                <Trending />
                <Suggestion />
            </main>
            <Footer />
        </>
    );
};

export default Home;
