import React from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { FilterOption, SortOption } from '../../types/marketplace';

interface ProductFiltersProps {
  filter: FilterOption;
  sort: SortOption;
  onFilterChange: (filter: FilterOption) => void;
  onSortChange: (sort: SortOption) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filter,
  sort,
  onFilterChange,
  onSortChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8">
      <div className="flex items-center gap-2">
        <Filter className="h-5 w-5 text-gray-500" />
        <select
          value={filter}
          onChange={(e) => onFilterChange(e.target.value as FilterOption)}
          className="border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
        >
          <option value="all">All Products</option>
          <option value="organic">Organic Only</option>
          <option value="fruits">Fruits</option>
          <option value="vegetables">Vegetables</option>
          <option value="seasonal">Seasonal</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <SlidersHorizontal className="h-5 w-5 text-gray-500" />
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
        >
          <option value="name">Name (A-Z)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;