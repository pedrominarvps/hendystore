
import React from 'react';
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-PY', {
      style: 'currency',
      currency: 'PYG',
      minimumFractionDigits: 0,
    }).format(amount).replace('PYG', '₲');
  };

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleFinalizeOrder = () => {
    // REEMPLAZA ESTE NÚMERO con tu número de teléfono de Paraguay (ej. 5959xxxxxxxx)
    const phoneNumber = "595981000000"; 
    
    let message = "¡Hola Hendy Store! 👋 Quiero realizar el siguiente pedido:\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Subtotal: ${formatCurrency(item.product.price * item.quantity)}\n\n`;
    });
    
    message += `*TOTAL DEL PEDIDO: ${formatCurrency(subtotal)}*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[150] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[160] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#002F6C] text-white">
          <div className="flex items-center gap-3">
            <ShoppingCart size={24} />
            <h2 className="text-xl font-black tracking-tight">Tu Carrito</h2>
            <span className="bg-[#FF6600] text-white text-[10px] px-2 py-1 rounded-full font-bold">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6 bg-[#f8f8f8]">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-gray-300 mb-4">
                <ShoppingCart size={40} />
              </div>
              <h3 className="text-lg font-black text-[#002F6C] mb-2 uppercase">Carrito Vacío</h3>
              <p className="text-sm text-gray-400 font-medium mb-8">Parece que aún no has agregado productos a tu pedido mayorista.</p>
              <button 
                onClick={onClose}
                className="bg-[#FF6600] text-white px-8 py-3 rounded-xl font-black shadow-lg hover:shadow-[#FF6600]/20 transition-all active:scale-95"
              >
                EMPEZAR A COMPRAR
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4 group">
                  <div className="w-20 h-20 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-xs font-black text-[#002F6C] line-clamp-2 leading-tight pr-4">
                        {item.product.name}
                      </h4>
                      <button 
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-sm font-black text-[#FF6600] mb-3">{formatCurrency(item.product.price)}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-100 rounded-lg overflow-hidden bg-white">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="p-1.5 hover:bg-gray-50 text-[#002F6C]"
                        >
                          <Minus size={14} strokeWidth={3} />
                        </button>
                        <span className="w-8 text-center text-xs font-black text-[#002F6C]">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-gray-50 text-[#002F6C]"
                        >
                          <Plus size={14} strokeWidth={3} />
                        </button>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                        Total: {formatCurrency(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-gray-100 space-y-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-bold text-gray-400 uppercase">Subtotal del pedido</span>
              <span className="text-2xl font-black text-[#002F6C]">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-[#FF6600] uppercase mb-4 tracking-wider animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></div>
              Válido para precios mayoristas en Paraguay
            </div>
            <button 
              onClick={handleFinalizeOrder}
              className="w-full bg-[#FF6600] hover:bg-[#e65c00] text-white py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-xl transition-all transform hover:-translate-y-1 active:scale-[0.98] uppercase tracking-widest"
            >
              Finalizar Pedido por WhatsApp
              <ArrowRight size={18} />
            </button>
            <p className="text-[9px] text-center text-gray-400 font-medium">
              Serás redirigido a WhatsApp para coordinar el pago y envío de tu bulto.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
