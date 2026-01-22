
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  fastShipping: boolean;
  minOrder: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface PromoSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
