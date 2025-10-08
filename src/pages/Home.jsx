import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => {
  return (
    <div className="text-white text-3xl">Hello, GSAP!</div>
  )
}

export default Home