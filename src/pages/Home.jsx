import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
import PopularContests from "../components/Home/PopularContests";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularContests />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
