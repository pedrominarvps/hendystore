
import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingCart, ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-PY', {
      style: 'currency',
      currency: 'PYG',
      minimumFractionDigits: 0,
    }).format(amount).replace('PYG', '₲');
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const handleWhatsAppBuy = () => {
    // REEMPLAZA ESTE NÚMERO con tu número de teléfono de Paraguay (ej. 5959xxxxxxxx)
    const phoneNumber = "595981000000"; 
    
    const totalPrice = product.price * quantity;
    const message = `Hola! Quiero comprar: ${product.name} - Cantidad: ${quantity} - Total: ${formatCurrency(totalPrice)}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden relative z-10 animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-red-500 hover:text-white rounded-full transition-all z-20"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">
          {/* Left Side: Image */}
          <div className="w-full md:w-[55%] bg-gray-50 flex items-center justify-center p-8">
            <div className="relative group w-full aspect-square">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl rounded-2xl"
              />
              {product.fastShipping && (
                <div className="absolute top-0 left-0 bg-[#FF6600] text-white text-[10px] font-black px-4 py-2 rounded-lg shadow-lg uppercase tracking-wider">
                  Envío Express
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col h-full bg-white">
            <div className="mb-2">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Distribuidor Oficial</span>
              <h2 className="text-3xl font-black text-[#002F6C] leading-tight mb-4">{product.name}</h2>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
              <p className="text-sm font-bold text-gray-400 mb-1">Precio Mayorista</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#FF6600]">
                  {formatCurrency(product.price)}
                </span>
                <span className="text-sm text-gray-400 font-bold uppercase">/ Unidad</span>
              </div>
              <p className="text-[11px] text-[#002F6C] font-bold mt-2 flex items-center gap-1 uppercase">
                <CreditCard size={14} className="text-[#FF6600]" /> {product.minOrder} Mínimo
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-black text-[#002F6C] uppercase tracking-wider mb-3">Descripción Detallada</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {product.description || `Este producto de alta gama ha sido seleccionado bajo los más estrictos estándares de calidad. Ideal para importadores y emprendedores en Paraguay que buscan competitividad y durabilidad. Incluye garantía oficial de Hendy Store.`}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-10">
              <h3 className="text-xs font-black text-[#002F6C] uppercase tracking-wider mb-4">Cantidad de Unidades</h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center border-2 border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 text-[#002F6C] transition-colors"
                  >
                    <Minus size={20} strokeWidth={3} />
                  </button>
                  <span className="w-14 text-center font-black text-[#002F6C] text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50 text-[#002F6C] transition-colors"
                  >
                    <Plus size={20} strokeWidth={3} />
                  </button>
                </div>
                <div className="text-xs font-bold text-gray-400">
                  Total: <span className="text-[#002F6C]">{formatCurrency(product.price * quantity)}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mt-auto">
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-[#002F6C] hover:bg-[#001d4a] text-white font-black py-4 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <ShoppingCart size={22} />
                AGREGAR AL CARRITO
              </button>
              <button 
                onClick={handleWhatsAppBuy}
                className="flex-grow bg-[#FF6600] hover:bg-[#e65c00] text-white font-black py-5 rounded-2xl transition-all shadow-2xl flex items-center justify-center gap-3 text-lg active:scale-[0.98] transform hover:-translate-y-1"
              >
                COMPRAR AHORA
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase">
                <ShieldCheck size={16} className="text-[#FF6600]" /> Compra Segura
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase">
                <Truck size={16} className="text-[#FF6600]" /> Envío Nacional
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
