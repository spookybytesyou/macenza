"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import ScrollReveal from "@/components/ScrollReveal";
import LogoLoop from "@/components/LogoLoop";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

const LOGOS = [
  { src: '/logos/airbnb.svg', alt: 'Airbnb' },
  { src: '/logos/chanel.svg', alt: 'Chanel' },
  { src: '/logos/ibm.svg', alt: 'IBM' },
  { src: '/logos/lenovo.svg', alt: 'Lenovo' },
  { src: '/logos/puma.svg', alt: 'Puma' },
  { src: '/logos/suzuki.svg', alt: 'Suzuki' },
];

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const heroHeaderRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!skyRef.current || !windowRef.current || !aboutRef.current || !heroHeaderRef.current) return;

    const skyContainerHeight = skyRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const skyMoveDistance = skyContainerHeight - viewportHeight;
    const fadeOverlay = container.current?.querySelector(".hero-bottom-fade");

    gsap.set(aboutRef.current, { yPercent: 100 });
    if (fadeOverlay) gsap.set(fadeOverlay, { opacity: 0 });

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: `+=${window.innerHeight * 3}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // Only show the fade when we're past 70% of the hero animation
        const fadeOpacity = progress > 0.7 ? (progress - 0.7) / 0.3 : 0;
        if (fadeOverlay) gsap.set(fadeOverlay, { opacity: fadeOpacity });

        let windowScale;
        if (progress <= 0.6) {
          windowScale = 1 + (progress / 0.6) * 5;
        } else {
          windowScale = 6 + Math.pow((progress - 0.6) / 0.4, 3) * 60;
        }

        gsap.set(windowRef.current, { scale: windowScale });
        gsap.set(heroHeaderRef.current, { scale: windowScale, z: progress * 500 });

        gsap.set(skyRef.current, {
          y: -progress * skyMoveDistance,
        });

        let aboutY;
        if (progress <= 0.66) {
          aboutY = 100;
        } else if (progress >= 1) {
          aboutY = 0;
        } else {
          aboutY = 100 * (1 - (progress - 0.66) / 0.34);
        }
        gsap.set(aboutRef.current, { yPercent: aboutY });
      },
    });

  }, { scope: container });

  return (
    <section ref={container} className="hero">
      <div ref={skyRef} className="sky-container">
        <StarsBackground pointerEvents={true} />
      </div>

      <div ref={aboutRef} className="about">
        <div className="about-content">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            blurStrength={10}
            containerClassName="about-reveal"
            textClassName="about-text"
            start="top bottom-=220%"
            wordAnimationEnd="top bottom-=280%"
          >
            At Macenza, we’re driven by ideas that make a difference. We
            specialize in creating smart, impactful solutions that help
            businesses move faster, work smarter, and achieve more. Our team
            blends creativity with technology to turn challenges into
            opportunities and visions into reality.
          </ScrollReveal>

          <LogoLoop
            logos={LOGOS}
            speed={40}
            gap={100}
            fadeOut={true}
            fadeOutColor="var(--dark)"
            logoHeight={40}
            scaleOnHover={true}
          />
        </div>
      </div>

      <div ref={windowRef} className="window-container">
        <img src="/window.webp" alt="Window" />
      </div>

      <div ref={heroHeaderRef} className="hero-header">
        <div className="col">
          <h1>
            Build What <br />
            Matters
          </h1>
        </div>

        <div className="col">
          <h1>
            Ideas Into <br />
            Reality
          </h1>
        </div>
      </div>

      <div className="hero-bottom-fade"></div>
    </section>
  );
}
