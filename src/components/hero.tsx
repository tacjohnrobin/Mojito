import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // --- SplitText animations ---
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });
    const titleSplit = new SplitText(".subtitles", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.07,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    gsap.from(titleSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });

    // --- Leaf animations ---
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    // --- Video scroll animation ---
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    if (videoRef.current) {
      gsap.to(videoRef.current, {
        currentTime: videoRef.current.duration || 5, // fallback duration
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: startValue,
          end: endValue,
          scrub: true,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p className="mb-4">Cool . Crisp . Classic</p>
              <p className="subtitle">
                Embrace the Vibe
                <br />
                Sip the Spirit .<br />
              </p>
            </div>

            <div className="view-cocktails hidden md:block">
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                architecto officia nesciunt doloribus soluta. Temporibus eaque
                itaque aliquam qui ut odit quos in facilis iste reiciendis
                voluptates, unde molestiae adipisci!
              </p>
              <a href="#cocktails" className="inline-block btn">
                view Cocktails
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
