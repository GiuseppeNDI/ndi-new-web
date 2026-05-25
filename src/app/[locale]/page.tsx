'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Hero from '@/components/sections/Hero';
import FeaturedProduct from '@/components/sections/FeaturedProduct';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Page() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <FeaturedProduct />
      <Projects />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
