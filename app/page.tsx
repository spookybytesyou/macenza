"use client";

import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="main-wrapper">

      <Hero />
      {/* About Section resides under Hero section */}
      <Testimonials />
      <Services />

    </div>
  );
}
