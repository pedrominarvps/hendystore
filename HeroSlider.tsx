
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROMO_SLIDES } from '../constants';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PROMO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % PROMO_SLIDES.length);
  const prev = () => setCurrent((prev) => (prev === 0 ? PROMO_SLIDES.length - 1 : prev - 1));

  return (
    <div className="relative overflow-hidden rounded-2xl h-[480px] group shadow-xl">
      {PROMO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className={`absolute inset-0 ${slide.color} opacity-40 mix-blend-multiply`}></div>
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent flex flex-col justify-center px-16 text-white">
            <span className="bg-[#FF6600] text-white text-xs font-black px-4 py-1.5 rounded-full w-fit mb-6 tracking-wider shadow-lg">EXCLUSIVO MAYORISTAS</span>
            <h2 className="text-6xl font-black mb-6 leading-tight max-w-lg drop-shadow-md">{slide.title}</h2>
            <p className="text-2xl opacity-90 mb-10 max-w-md font-medium leading-relaxed">{slide.subtitle}</p>
            <button className="bg-white text-[#002F6C] px-10 py-4 rounded-full font-black w-fit hover:bg-[#FF6600] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#FF6600] p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-[#FF6600] p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-16 z-20 flex gap-3">
        {PROMO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? 'w-12 bg-[#FF6600]' : 'w-2.5 bg-white/40'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
