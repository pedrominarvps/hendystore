
import React from 'react';
import { UserCircle2, ShieldCheck, Truck, Clock } from 'lucide-react';

const UserCard: React.FC = () => {
  return (
    <div className="space-y-6 hidden xl:block">
      {/* Welcome Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 border border-gray-100">
            <UserCircle2 size={36} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Hola!</p>
            <p className="font-black text-[#002F6C] text-lg">Inicia sesión</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <button className="w-full bg-[#FF6600] hover:bg-[#e65c00] text-white font-black py-3 rounded-xl transition-all shadow-lg transform active:scale-95">
            Registrarse Gratis
          </button>
          <button className="w-full border-2 border-[#FF6600] text-[#FF6600] hover:bg-[#FF6600]/5 font-black py-3 rounded-xl transition-all">
            Ingresar
          </button>
        </div>
      </div>

      {/* Mini Feature List */}
      <div className="bg-[#002F6C] rounded-2xl shadow-xl p-6 text-white border-t-4 border-[#FF6600]">
        <h3 className="font-black text-sm mb-6 flex items-center gap-2 uppercase tracking-wide">
          <ShieldCheck size={18} className="text-[#FF6600]" /> Hendy Mayorista
        </h3>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Truck size={22} className="text-[#FF6600]" />
            </div>
            <div>
              <p className="text-sm font-black">Logística Propia</p>
              <p className="text-[11px] opacity-60 font-medium">Llegamos a cada rincón del país.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <ShieldCheck size={22} className="text-[#FF6600]" />
            </div>
            <div>
              <p className="text-sm font-black">Seguridad Total</p>
              <p className="text-[11px] opacity-60 font-medium">Pagos encriptados y protegidos.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="p-2 bg-white/10 rounded-lg">
              <Clock size={22} className="text-[#FF6600]" />
            </div>
            <div>
              <p className="text-sm font-black">Atención en Guaraní</p>
              <p className="text-[11px] opacity-60 font-medium">Soporte nativo 24/7.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
