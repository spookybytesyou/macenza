"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './NavbarLogo.css';

gsap.registerPlugin(ScrollTrigger);

const NavbarLogo = ({ isHidden = false }: { isHidden?: boolean }) => {
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      autoAlpha: isHidden ? 0 : 1,
      duration: 0.5,
      ease: "power2.inOut",
      overwrite: 'auto'
    });
  }, [isHidden]);

  useGSAP(() => {
    if (!logoRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 1000px)", () => {
      // Mobile: Shifted slightly upwards
      gsap.fromTo(logoRef.current,
        {
          y: "40vh",
          scale: 2.5,
          opacity: 1
        },
        {
          x: -100,
          y: 10,
          scale: 1.5,
          opacity: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "1800px",
            scrub: 0.5,
          }
        }
      );
    });

    mm.add("(min-width: 1001px)", () => {
      // Desktop: Original positioning
      gsap.fromTo(logoRef.current,
        {
          y: "40vh",
          scale: 2.5,
          opacity: 1
        },
        {
          y: 20,
          scale: 1.5,
          opacity: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "1800px", // Longer range for a "slower" feel
            scrub: 0.5,
          }
        }
      );
    });

    return () => mm.revert();
  });

  return (
    <div ref={logoRef} className="navbar-logo-container">
      <img
        src="/macenza-logo.svg"
        alt="Macenza Logo"
        className="navbar-logo-svg"
      />
    </div>
  );
};

export default NavbarLogo;
