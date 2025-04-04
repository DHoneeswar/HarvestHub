export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isOrganic: boolean;
  season: 'Spring' | 'Summer' | 'Winter' | 'All Season';
  unit: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'name';
export type FilterOption = 'all' | 'organic' | 'fruits' | 'vegetables' | 'seasonal';