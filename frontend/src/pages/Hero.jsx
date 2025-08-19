import React from 'react';
import "../index.css";
import heroImg from "/assets/hero.jpg";

export default function Hero() {
  return (
    <section 
      className="relative h-screen bg-center bg-no-repeat bg-cover" 
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay (optional, for readability) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-6 text-white md:items-start lg:px-20">
        <div className="text-2xl font-bold leading-snug sm:text-5xl md:text-5xl lg:text-6xl">
          <h2 className='font-sans italic'>Elegance in simplicity,</h2>
          <h2 className="py-4 font-sans italic md:py-6">Earth’s harmony</h2>
        </div>

        <div>
          <button className="mt-4 px-6 py-2 md:px-10 md:py-3 bg-white text-black rounded hover:bg-[#5A6D57] hover:text-white font-montserrat font-light transition">
            Check Out!
          </button>
        </div>
      </div>
    </section>
  );
}
