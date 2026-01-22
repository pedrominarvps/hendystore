
import React from 'react';
import * as Icons from 'lucide-react';
import { CATEGORIES } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 py-6 hidden lg:block overflow-hidden">
      <h2 className="px-8 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-6">Categorías Globales</h2>
      <ul className="space-y-0.5">
        {CATEGORIES.map((category) => {
          // Dynamic icon resolution
          const IconComponent = (Icons as any)[category.icon] || Icons.Box;
          return (
            <li key={category.id}>
              <a 
                href="#" 
                className="flex items-center justify-between px-8 py-3 text-sm text-[#002F6C] font-semibold hover:bg-gray-50 hover:text-[#FF6600] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-[#FF6600]/10 transition-colors">
                    <IconComponent size={18} className="text-gray-400 group-hover:text-[#FF6600]" />
                  </div>
                  <span>{category.name}</span>
                </div>
                <Icons.ChevronRight size={14} className="opacity-0 group-hover:opacity-100 text-[#FF6600] -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 px-8 pt-6 border-t border-gray-50">
        <a href="#" className="text-xs font-black text-[#FF6600] hover:underline uppercase tracking-widest flex items-center gap-2 group">
          Ver todas <Icons.ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
