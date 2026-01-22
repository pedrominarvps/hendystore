
import React from 'react';
import { Truck, Star, Heart, ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onSelectProduct }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-PY', {
      style: 'currency',
      currency: 'PYG',
      minimumFractionDigits: 0,
    }).format(amount).replace('PYG', '₲');
  };

  return (
    <section className="mt-16">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-black text-[#002F6C] mb-2 tracking-tight uppercase">Recomendados para ti</h2>
          <div className="h-1.5 w-24 bg-[#FF6600] rounded-full"></div>
        </div>
        <a href="#" className="flex items-center gap-2 text-[#FF6600] font-black text-sm hover:translate-x-1 transition-transform">
          VER TODO EL CATÁLOGO <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            onClick={() => onSelectProduct(product)}
            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#FF6600] hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative aspect-square overflow-hidden bg-gray-50/50">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button 
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-300 hover:text-[#FF6600] hover:bg-white transition-all shadow-md z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <Heart size={20} fill="currentColor" className="fill-transparent" />
              </button>
              {product.fastShipping && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#FF6600] text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-lg uppercase">
                  <Truck size={14} />
                  <span>Envío Express</span>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center gap-1 mb-3">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill={i < 4 ? "currentColor" : "none"} className={i < 4 ? "" : "text-gray-200"} />
                  ))}
                </div>
                <span className="text-[11px] text-gray-400 font-bold ml-1">4.8</span>
              </div>
              
              <h3 className="font-bold text-[#002F6C] text-sm mb-4 line-clamp-2 leading-relaxed group-hover:text-[#FF6600] transition-colors">
                {product.name}
              </h3>
              
              <div className="mt-auto">
                <p className="text-2xl font-black text-[#002F6C] leading-none mb-2">
                  {formatCurrency(product.price)}
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-3 mt-1">
                  <span className="text-[11px] text-gray-400 font-bold uppercase">Min. {product.minOrder}</span>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-[#FF6600] group-hover:text-[#FF6600] transition-colors">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="bg-[#002F6C] text-white font-black px-16 py-5 rounded-2xl hover:bg-[#FF6600] transition-all shadow-2xl transform active:scale-95 text-sm tracking-widest uppercase">
          Explorar más productos
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
