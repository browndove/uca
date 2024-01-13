// components/ScrollAnimationSection.js
"use client"
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import Trial from "@/public/trial.jpg"

const ScrollAnimationSection = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    // Get the scroll position
    const scrollY = window.scrollY || window.pageYOffset;

    // Adjust the scaleY value based on the scroll position
    const scaleY = 1 + scrollY / 1000;

    // Update the animation controls
    controls.start({ scaleY });
  };

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Your image goes here */}
      <Image src={Trial} alt='' />

      {/* White background with zoom animation */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white"
        style={{ originY: 0, scaleY: 1 }}
        animate={controls}
      ></motion.div>
    </section>
  );
};

export default ScrollAnimationSection;
