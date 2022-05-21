import "./Homepage.scss";
import Layout from "../../shared/layout/Layout";
import Carousel from "../../ui/carousel/Carousel";
import Category from "../../ui/category/Category";
import FlashSale from "../../ui/flash-sale/Flash-sale";
import Trending from "../../ui/trending/Trending";
import Suggestion from "../../ui/suggestion/Suggestion";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <main className="bg-gray py-4">
        <Category />
        <FlashSale />
        <Trending />
        <Suggestion />
      </main>
    </Layout>
  );
};

export default Home;
