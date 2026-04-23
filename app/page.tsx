"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const skyContainerRef = useRef<HTMLDivElement>(null);
  const windowContainerRef = useRef<HTMLDivElement>(null);
  const heroHeaderRef = useRef<HTMLDivElement>(null);
  const heroCopyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Lenis smooth scrolling
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // GSAP Animation
    const skyContainer = skyContainerRef.current;
    const windowContainer = windowContainerRef.current;
    const heroHeader = heroHeaderRef.current;
    const heroCopy = heroCopyRef.current;

    if (!skyContainer || !windowContainer || !heroHeader || !heroCopy) return;

    const skyContainerHeight = skyContainer.offsetHeight;
    const viewportHeight = window.innerHeight;
    const skyMoveDistance = skyContainerHeight - viewportHeight;

    gsap.set(heroCopy, { yPercent: 100 });

    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: `+=${window.innerHeight * 3}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        let windowScale;
        if (progress <= 0.5) {
          windowScale = 1 + (progress / 0.5) * 3;
        } else {
          windowScale = 4;
        }
        gsap.set(windowContainer, { scale: windowScale });
        gsap.set(heroHeader, { scale: windowScale, z: progress * 500 });

        gsap.set(skyContainer, {
          y: -progress * skyMoveDistance,
        });

        let heroCopyY;
        if (progress <= 0.66) {
          heroCopyY = 100;
        } else if (progress >= 1) {
          heroCopyY = 0;
        } else {
          heroCopyY = 100 * (1 - (progress - 0.66) / 0.34);
        }
        gsap.set(heroCopy, { yPercent: heroCopyY });
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, { scope: container });

  return (
    <div ref={container} className="main-wrapper">
      <section className="hero">
        <div ref={skyContainerRef} className="sky-container">
          <img src="/space.webp" alt="Space Background" />
        </div>

        <div ref={heroCopyRef} className="about">
          <h1>
            At Macenza, we’re driven by ideas that make a difference. We
            specialize in creating smart, impactful solutions that help
            businesses move faster, work smarter, and achieve more. Our team
            blends creativity with technology to turn challenges into
            opportunities and visions into reality.
          </h1>
        </div>

        <div ref={windowContainerRef} className="window-container">
          <img src="/window.webp" alt="Window" />
        </div>

        <div ref={heroHeaderRef} className="hero-header">
          <div className="col">
            <h1>
              An aperture <br />
              into stillness
            </h1>
          </div>

          <div className="col">
            <p>Observation Mode</p>
            <h1>
              Where distance <br />
              Becomes a presence.
            </h1>
          </div>
        </div>
      </section>

      <section className="placeholder">
        <h1>Placeholder text.</h1>
      </section>
    </div>
  );
}
