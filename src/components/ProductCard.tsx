import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BiStar, BiStore } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  vendor: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  vendor,
  rating,
  reviews,
  inStock,
  category
}) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
        width={200}
        height={200}
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <span className="px-2 py-1 bg-rose-600 text-white text-xs font-inter font-semibold rounded-lg">
              -{discount}%
            </span>
          )}
          {!inStock && (
            <span className="px-2 py-1 bg-slate-900 text-white text-xs font-inter font-semibold rounded-lg">
              Out of Stock
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="p-2 bg-white rounded-full shadow-lg hover:bg-rose-50 transition-colors"
            aria-label="Add to cart"
            disabled={!inStock}
          >
            <FaShoppingCart className={`w-5 h-5 ${inStock ? 'text-rose-600' : 'text-slate-400'}`} />
          </button>
        </div>

        {/* Category */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-inter font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Vendor */}
        <div className="flex items-center space-x-2 mb-2">
          <BiStore className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-inter text-slate-500">{vendor}</span>
        </div>

        {/* Product Name */}
        <Link href={`/products/${id}`}>
          <h3 className="font-montserrat font-semibold text-lg text-slate-900 mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <BiStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'text-amber-400 fill-current'
                    : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-inter text-slate-500">
            {rating} ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-montserrat font-bold text-xl text-slate-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="font-inter text-sm text-slate-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {inStock && (
            <button className="px-4 py-2 bg-rose-600 text-white font-inter font-medium text-sm rounded-lg hover:bg-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;