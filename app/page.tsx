"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TestimonialsWithCarousel from "@/components/testimonials-with-carousel";

export default function Home() {
  return (
    <div className="main-wrapper">

      <Hero />
      <TestimonialsWithCarousel />
      <Services />

    </div>
  );
}
