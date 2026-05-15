"use client";

import Hero from "@/components/sections/Hero";
import TestimonialsWithCarousel from "@/components/sections/testimonials-with-carousel";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="main-wrapper">

      <Hero />
      {/* About Section resides under Hero section */}
      <TestimonialsWithCarousel />
      <Services />

    </div>
  );
}
