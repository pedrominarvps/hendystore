
import React from 'react';
import { Search, ShoppingCart, MessageSquare, Menu, Globe, ChevronDown, User, HelpCircle } from 'lucide-react';

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount = 0, onOpenCart }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Line: Help and Currency */}
      <div className="bg-[#f8f8f8] border-b border-gray-100 py-1.5 text-xs text-gray-500">
        <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FF6600] transition-colors flex items-center gap-1 font-medium">
              <HelpCircle size={14} /> Centro de Ayuda
            </a>
            <a href="#" className="hover:text-[#FF6600] transition-colors font-medium">Vender en Hendy</a>
            <a href="#" className="hover:text-[#FF6600] transition-colors font-medium">Hendy Protección</a>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1 hover:text-[#FF6600] transition-colors font-medium">
              <Globe size={14} /> ES / PYG (₲)
            </button>
            <button className="flex items-center gap-1 hover:text-[#FF6600] transition-colors font-medium">
              Descargar App
            </button>
          </div>
        </div>
      </div>

      {/* Center Line: Logo and Massive Search */}
      <div className="max-w-[1400px] mx-auto px-4 py-5 flex items-center gap-10">
        <div className="flex-shrink-0 cursor-pointer">
          <h1 className="text-3xl font-black text-[#FF6600] tracking-tighter flex items-center gap-1">
            HENDY <span className="text-[#002F6C]">STORE</span>
          </h1>
        </div>

        {/* Search Bar Container */}
        <div className="flex-grow max-w-3xl flex">
          <div className="flex flex-grow items-center border border-gray-300 rounded-full overflow-hidden shadow-sm transition-all focus-within:border-[#FF6600] focus-within:ring-2 focus-within:ring-[#FF6600]/20 bg-white">
            <div className="px-5 py-2.5 bg-gray-50 border-r border-gray-200 text-sm font-semibold text-[#002F6C] cursor-pointer hover:bg-gray-100 flex items-center gap-1">
              Productos <ChevronDown size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Encuentra proveedores de confianza en Hendy..." 
              className="flex-grow px-5 py-2.5 outline-none text-sm text-[#002F6C]"
            />
            <button className="bg-[#FF6600] hover:bg-[#e65c00] text-white px-10 py-3 transition-colors flex items-center gap-2">
              <Search size={20} />
              <span className="font-bold hidden md:inline">Buscar</span>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-8">
          <button className="flex flex-col items-center gap-1 text-[#002F6C] hover:text-[#FF6600] transition-colors relative group">
            <MessageSquare size={26} className="group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">Mensajes</span>
            <span className="absolute -top-1 -right-1 bg-[#FF6600] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </button>
          <button 
            onClick={onOpenCart}
            className="flex flex-col items-center gap-1 text-[#002F6C] hover:text-[#FF6600] transition-colors group relative"
          >
            <ShoppingCart size={26} className="group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">Carrito</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#FF6600] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
          <button className="flex flex-col items-center gap-1 text-[#002F6C] hover:text-[#FF6600] transition-colors group">
            <User size={26} className="group-hover:scale-110 transition-transform" />
            <span className="text-[11px] font-bold">Mi Cuenta</span>
          </button>
        </div>
      </div>

      {/* Bottom Line: Secondary Menu */}
      <div className="border-t border-gray-100 py-3 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center gap-10 overflow-x-auto no-scrollbar">
          <button className="flex items-center gap-2 font-bold text-[#002F6C] text-sm whitespace-nowrap hover:text-[#FF6600] group">
            <Menu size={20} className="text-[#FF6600]" />
            Categorías
          </button>
          <div className="h-4 w-px bg-gray-200"></div>
          <nav className="flex items-center gap-8 text-sm font-semibold text-[#002F6C]">
            <a href="#" className="hover:text-[#FF6600] whitespace-nowrap">Listo para enviar</a>
            <a href="#" className="hover:text-[#FF6600] whitespace-nowrap">Hendy Select</a>
            <a href="#" className="hover:text-[#FF6600] whitespace-nowrap">Novedades</a>
            <a href="#" className="hover:text-[#FF6600] whitespace-nowrap">Trade Assurance</a>
            <a href="#" className="hover:text-[#FF6600] whitespace-nowrap">Ofertas Relámpago</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
