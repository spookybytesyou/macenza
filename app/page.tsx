"use client";

import Hero from "@/components/Hero";
import TestimonialsWithCarousel from "@/components/testimonials-with-carousel";
import Services from "@/components/Services";

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
