
import React, { useState, useEffect } from 'react';
import { Zap, Clock, ChevronRight } from 'lucide-react';

const FlashDeals: React.FC = () => {
  // Static timer values for now
  const [timeLeft, setTimeLeft] = useState({ h: 4, m: 22, s: 55 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  const DEALS = [
    { id: 1, img: 'https://picsum.photos/seed/d1/200/200', price: 150000, discount: '-45%' },
    { id: 2, img: 'https://picsum.photos/seed/d2/200/200', price: 85000, discount: '-60%' },
    { id: 3, img: 'https://picsum.photos/seed/d3/200/200', price: 420000, discount: '-30%' },
    { id: 4, img: 'https://picsum.photos/seed/d4/200/200', price: 29000, discount: '-80%' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-12 flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-shrink-0 text-center md:text-left md:border-r border-gray-100 md:pr-10">
        <div className="flex items-center justify-center md:justify-start gap-2 text-[#FF6600] mb-2 font-black italic text-xl">
          <Zap size={24} fill="currentColor" />
          <span>OFERTAS RELÁMPAGO</span>
        </div>
        <p className="text-[#002F6C] font-bold text-sm mb-4">¡Terminan pronto!</p>
        <div className="flex gap-2 justify-center md:justify-start">
          <div className="bg-[#002F6C] text-white w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg">{formatNum(timeLeft.h)}</div>
          <span className="text-[#002F6C] font-black text-xl">:</span>
          <div className="bg-[#002F6C] text-white w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg">{formatNum(timeLeft.m)}</div>
          <span className="text-[#002F6C] font-black text-xl">:</span>
          <div className="bg-[#FF6600] text-white w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg shadow-lg shadow-[#FF6600]/30">{formatNum(timeLeft.s)}</div>
        </div>
      </div>

      <div className="flex-grow grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {DEALS.map(deal => (
          <div key={deal.id} className="group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden mb-3 bg-gray-50 aspect-square border border-transparent group-hover:border-[#FF6600]/30 transition-all">
              <img src={deal.img} alt="Oferta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-2 left-2 bg-[#FF6600] text-white text-[10px] font-black px-2 py-0.5 rounded shadow-md">
                {deal.discount}
              </div>
            </div>
            <p className="text-[#002F6C] font-black text-sm">₲ {deal.price.toLocaleString('es-PY')}</p>
          </div>
        ))}
      </div>

      <button className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-50 hover:bg-[#FF6600] text-[#002F6C] hover:text-white flex items-center justify-center transition-all border border-gray-100 group shadow-sm">
        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default FlashDeals;
