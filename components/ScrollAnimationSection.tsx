// ScrollAnimationSection.js
import React, { useEffect } from 'react';

const ScrollAnimationSection = ({ backgroundImage, title, subtitle, para } : {backgroundImage: string; title: string; subtitle: string; para: string }) => {
  useEffect(() => {
    const scrollThreshold = 50;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > scrollThreshold) {
        // Scroll down
        window.scrollTo(0, scrollTop + scrollThreshold);
      } else if (scrollTop < -scrollThreshold) {
        // Scroll up
        window.scrollTo(0, scrollTop - Math.abs(scrollThreshold));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="bg-cover bg-center h-screen z-20 " style={{ backgroundImage: `url("${backgroundImage}")` }}>
        <div className="absolute top-[25%] left-[20%]">
          {/* Your HeaderxPara component goes here */}
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <h2 className="text-2xl font-semibold text-white">{subtitle}</h2>
          <p className="text-lg text-white">{para}</p>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimationSection;
