import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh"></div>
    </main>
  );
};

export default Home;
