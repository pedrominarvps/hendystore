
import { Product, Category, PromoSlide } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Electrónica', icon: 'Laptop' },
  { id: '2', name: 'Hogar y Jardín', icon: 'Home' },
  { id: '3', name: 'Moda y Accesorios', icon: 'Shirt' },
  { id: '4', name: 'Deportes', icon: 'Trophy' },
  { id: '5', name: 'Salud y Belleza', icon: 'Heart' },
  { id: '6', name: 'Juguetes y Hobbies', icon: 'Gamepad2' },
  { id: '7', name: 'Automotriz', icon: 'CarFront' },
  { id: '8', name: 'Maquinaria', icon: 'Settings' },
  { id: '9', name: 'Herramientas', icon: 'Hammer' },
  { id: '10', name: 'Muebles', icon: 'Armchair' },
];

export const PROMO_SLIDES: PromoSlide[] = [
  {
    id: 's1',
    title: 'Nueva Colección Tech 2024',
    subtitle: 'Hasta 40% de descuento en proveedores certificados.',
    image: 'https://picsum.photos/seed/tech/800/400',
    color: 'bg-orange-600'
  },
  {
    id: 's2',
    title: 'Hogar Confortable',
    subtitle: 'Equipamiento profesional para tu casa o negocio.',
    image: 'https://picsum.photos/seed/home/800/400',
    color: 'bg-blue-600'
  },
  {
    id: 's3',
    title: 'Ofertas de Temporada',
    subtitle: 'Precios mayoristas disponibles ahora.',
    image: 'https://picsum.photos/seed/shop/800/400',
    color: 'bg-purple-600'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    "id": "py-001",
    "name": "Set Mayorista: 12 Mates Térmicos de Acero Inoxidable 350ml",
    "price": 1250000,
    "image": "https://images.unsplash.com/photo-1515694590185-73647ba02c10?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": true,
    "minOrder": "1 set (12 un.)"
  },
  {
    "id": "py-002",
    "name": "Lote 5 Termos Automáticos 2.5L para Tereré Premium",
    "price": 2850000,
    "image": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": true,
    "minOrder": "5 unidades"
  },
  {
    "id": "py-003",
    "name": "Smartphone NextGen Z10 - 256GB (Precio Distribuidor)",
    "price": 3200000,
    "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": true,
    "minOrder": "2 unidades"
  },
  {
    "id": "py-004",
    "name": "Caja de 20 Auriculares Bluetooth Cancelación de Ruido",
    "price": 4500000,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": false,
    "minOrder": "1 caja (20 un.)"
  },
  {
    "id": "py-005",
    "name": "Smart Watch Ultra Fit con GPS - Lote de 10",
    "price": 2100000,
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": true,
    "minOrder": "10 unidades"
  },
  {
    "id": "py-006",
    "name": "Freidora de Aire Digital 5.5L - Pack Emprendedor (3 un.)",
    "price": 1950000,
    "image": "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": true,
    "minOrder": "3 unidades"
  },
  {
    "id": "py-007",
    "name": "Taladro Percutor Industrial 850W - Caja Master 6 un.",
    "price": 3800000,
    "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": true,
    "minOrder": "6 unidades"
  },
  {
    "id": "py-008",
    "name": "Set de Iluminación LED Solar para Jardín (Pack 50 un.)",
    "price": 1150000,
    "image": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": false,
    "minOrder": "1 pack"
  },
  {
    "id": "py-009",
    "name": "Mochila Ergonómica Porta Laptop - Bulto de 15 un.",
    "price": 2250000,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": true,
    "minOrder": "15 unidades"
  },
  {
    "id": "py-010",
    "name": "Parlante Bluetooth Resistente al Agua - Pack de 12",
    "price": 1680000,
    "image": "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=600&h=600&auto=format&fit=crop",
    "fastShipping": true,
    "minOrder": "12 unidades"
  }
];
