'use client';

import { motion } from 'motion/react';
import TestimonialCarousel from '@/components/ui/testimonial/testimonial-carousel';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    handle: 'Product Designer',
    description:
      'The attention to detail is incredible. Every interaction feels polished and intentional. My clients are always impressed with the final results.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format',
  },
  {
    name: 'Michael Torres',
    handle: 'Lead Developer',
    description:
      'Implementation was seamless from start to finish. The code quality is exceptional and everything just works out of the box.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format',
  },
  {
    name: 'Jessica Park',
    handle: 'Design Systems Lead',
    description:
      "The component architecture is brilliant. It's flexible enough for complex use cases yet simple enough for quick prototypes.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80&auto=format',
  },
  {
    name: 'Robert Kim',
    handle: 'Senior Engineer',
    description:
      "Finally, a library that doesn't sacrifice performance for aesthetics. Everything runs smoothly even on lower-end devices.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format',
  },
];

export default function Testimonials() {
  const title = 'Built for teams who ship fast';
  const titleWords = title.split(' ');

  return (
    // Revert to older version with min-height: 100vh
    // <section className='dark relative w-full min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-4 overflow-hidden'>
    <section className='dark relative w-full min-h-[120vh] bg-[#0f0f0f] flex flex-col items-center justify-center px-4 overflow-hidden'>
      <div className='testimonials-top-fade'></div>

      {/* Decorative Background Blobs */}
      <div className="from-red-500/20 to-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-b blur-3xl opacity-50" />
      <div className="from-rose-600/15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[400px] w-[400px] rounded-full bg-gradient-to-t to-transparent opacity-70 blur-[100px]" />

      <div className='relative z-10 flex flex-col items-center gap-12 w-full max-w-6xl'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <h2 className='text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight'>
            {titleWords.map((word, index) => (
              <motion.span
                key={`title-${word}-${index}`}
                initial={{ opacity: 0, filter: 'blur(6px)', y: 12 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: 'easeInOut',
                }}
                className='mr-3 inline-block'
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='text-base md:text-lg text-neutral-400 max-w-2xl'
          >
            Join thousands of professionals building better products
            <br className='hidden sm:block' />
            with components that just work.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className='w-full'
        >
          <TestimonialCarousel data={testimonials} borderType="solid" />
        </motion.div>
      </div>
    </section>
  );
}