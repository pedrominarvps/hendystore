
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroSlider from './components/HeroSlider';
import UserCard from './components/UserCard';
import ProductGrid from './components/ProductGrid';
import FlashDeals from './components/FlashDeals';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import { Zap, ShieldCheck, Globe, Trophy } from 'lucide-react';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true); // Open drawer automatically when adding
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    setCart(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <Header 
        cartCount={totalCartItems} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main className="max-w-[1400px] mx-auto px-4 py-8">
        
        {/* Layout Principal (Hero) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {/* Lado izquierdo: Menú vertical */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>

          {/* Centro: Slider de promociones */}
          <div className="lg:col-span-2">
            <HeroSlider />
          </div>

          {/* Lado derecho: Tarjeta de bienvenida */}
          <div className="lg:col-span-1">
            <UserCard />
          </div>
        </div>

        {/* Sección de Ofertas Relámpago */}
        <FlashDeals />

        {/* Info Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl flex items-center gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-[#FF6600]/10 rounded-2xl flex items-center justify-center text-[#FF6600] flex-shrink-0 group-hover:rotate-6 transition-transform">
              <Zap size={32} fill="currentColor" />
            </div>
            <div>
              <h4 className="font-black text-[#002F6C] text-lg">Catálogo Infinito</h4>
              <p className="text-xs text-gray-400 font-medium">Millones de opciones para potenciar tu stock.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl flex items-center gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-[#002F6C]/10 rounded-2xl flex items-center justify-center text-[#002F6C] flex-shrink-0 group-hover:rotate-6 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="font-black text-[#002F6C] text-lg">Hendy Protection</h4>
              <p className="text-xs text-gray-400 font-medium">Tus pagos y pedidos, 100% garantizados.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl flex items-center gap-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0 group-hover:rotate-6 transition-transform">
              <Trophy size={32} />
            </div>
            <div>
              <h4 className="font-black text-[#002F6C] text-lg">Calidad Premium</h4>
              <p className="text-xs text-gray-400 font-medium">Solo proveedores con certificaciones verificadas.</p>
            </div>
          </div>
        </div>

        {/* Grid de Productos */}
        <ProductGrid onSelectProduct={(p) => setSelectedProduct(p)} />

      </main>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-24 pb-12 mt-24">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-black text-[#FF6600] tracking-tighter mb-6">
                HENDY <span className="text-[#002F6C]">STORE</span>
              </h1>
              <p className="text-sm text-gray-400 leading-relaxed font-medium max-w-sm mb-8">
                El puente comercial definitivo entre Paraguay y el mundo. Somos especialistas en logística mayorista y protección al comprador.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                  <div key={social} className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-[#002F6C] hover:bg-[#FF6600] hover:text-white transition-all cursor-pointer shadow-sm">
                    <Globe size={18} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-black text-[#002F6C] text-xs uppercase tracking-widest mb-6">Soporte</h5>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Seguimiento de envío</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Garantías</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Devoluciones</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[#002F6C] text-xs uppercase tracking-widest mb-6">Empresa</h5>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Blog de importación</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Aliados logísticos</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Sostenibilidad</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[#002F6C] text-xs uppercase tracking-widest mb-6">Negocios</h5>
              <ul className="space-y-4 text-sm text-gray-400 font-medium">
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Hendy para Empresas</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Vender en Hendy</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">API para desarrolladores</a></li>
                <li><a href="#" className="hover:text-[#FF6600] transition-colors">Publicidad</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-tighter">
            <p>© 2024 Hendy Store S.A. | RUC: 80012345-6 | Hecho en Paraguay</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-[#FF6600]">Legal</a>
              <a href="#" className="hover:text-[#FF6600]">Privacidad</a>
              <a href="#" className="hover:text-[#FF6600]">Términos Mayoristas</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
