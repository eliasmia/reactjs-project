import Banner from "./Home/sections/Banner";
import Offers from "./Home/sections/Offers";
import AboutSection from "./Home/sections/AboutSection";
import CounterSection from "./Home/sections/CounterSection";
import Teams from "./Home/sections/Teams";
import Schedules from "./Home/sections/Schedules";
const Home = () => {
  return (
    <>
    <Banner />
    <Offers />
    <AboutSection />
    <CounterSection />
    <Teams />
    {/* <Schedules /> */}
    </>
  );
};

export default Home;