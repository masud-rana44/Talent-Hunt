import Advertise from "../components/Home/Advertise";
import Banner from "../components/Home/Banner";
import BestCreators from "../components/Home/BestCreators";
import PopularContests from "../components/Home/PopularContests";
import Testimonials from "../components/Home/Testimonials";
import Title from "../components/Shared/Title";

const Home = () => {
  return (
    <div>
      <Title title="Home | Talent Hunt" />
      <Banner />
      <PopularContests />
      <Advertise />
      <BestCreators />
      <Testimonials />
    </div>
  );
};

export default Home;
