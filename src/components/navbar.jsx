import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants/index.js";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    // GSAP animation code can be added here
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
      {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundfilter: "saturate(180%) blur(10px)",
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <nav className="w-full bg-gray-800 text-white">
      <div>
        <a href="#home" className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-lg font-medium text-white hover:text-gray-400"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
