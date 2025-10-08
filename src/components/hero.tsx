import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words," });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });
    const titleSplit = new SplitText(".subtitles", {
      type: "lines",
    });

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
            <div className="space-y-5  hidden md:block">
              <p className="mb-4">Cool . Crisp . Classic </p>
              <p
                className="subtitle
               "
              >
                Embrace the Vibe
                <br />
                Sip the Spirit .
                <br />
              </p>
            </div>

            <div className="view-cocktails hidden md:block">
              <p className="subtitle ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quae nam autem sequi quisquam possimus mollitia ea animi
                explicabo recusandae repudiandae eius, culpa error soluta id?
                Laudantium sequi totam laborum?
              </p>
              <a href="#cocktails" className="  inline-block btn">
                {" "}
                view Cocktails
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
