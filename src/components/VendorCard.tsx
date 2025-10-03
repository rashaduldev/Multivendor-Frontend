import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BiMapPin, BiPackage, BiStar, BiTrendingUp } from 'react-icons/bi';

interface VendorCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  coverImage: string;
  rating: number;
  reviews: number;
  location: string;
  totalProducts: number;
  totalSales: string;
  categories: string[];
  verified: boolean;
}

const VendorCard: React.FC<VendorCardProps> = ({
  id,
  name,
  description,
  image,
  coverImage,
  rating,
  reviews,
  location,
  totalProducts,
  totalSales,
  categories,
  verified
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Cover Image */}
      <div className="relative h-32 overflow-hidden">
        <Image
        width={300}
        height={300}
          src={coverImage}
          alt={`${name} cover`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Verified Badge */}
        {verified && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-green-600 text-white text-xs font-inter font-semibold rounded-full">
              Verified
            </span>
          </div>
        )}
      </div>

      {/* Vendor Avatar */}
      <div className="relative px-6 -mt-8">
        <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
          <Image
          width={300}
          height={300}
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Vendor Info */}
      <div className="px-6 pb-6 pt-2">
        {/* Name and Rating */}
        <div className="flex items-start justify-between mb-2">
          <Link href={`/vendors/${id}`}>
            <h3 className="font-montserrat font-semibold text-xl text-slate-900 group-hover:text-rose-600 transition-colors">
              {name}
            </h3>
          </Link>
          <div className="flex items-center space-x-1">
            <BiStar className="w-4 h-4 text-amber-400 fill-current" />
            <span className="text-sm font-inter font-medium text-slate-700">
              {rating}
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2 mb-3">
          <BiMapPin className="w-4 h-4 text-slate-400" />
          <span className="text-sm font-inter text-slate-500">{location}</span>
        </div>

        {/* Description */}
        <p className="font-inter text-slate-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.slice(0, 3).map((category) => (
            <span
              key={category}
              className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-inter rounded-lg"
            >
              {category}
            </span>
          ))}
          {categories.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-inter rounded-lg">
              +{categories.length - 3} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <BiPackage className="w-4 h-4 text-slate-400" />
            </div>
            <div className="font-montserrat font-semibold text-sm text-slate-900">
              {totalProducts}
            </div>
            <div className="font-inter text-xs text-slate-500">Products</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <BiTrendingUp className="w-4 h-4 text-slate-400" />
            </div>
            <div className="font-montserrat font-semibold text-sm text-slate-900">
              {totalSales}
            </div>
            <div className="font-inter text-xs text-slate-500">Sales</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <BiStar className="w-4 h-4 text-slate-400" />
            </div>
            <div className="font-montserrat font-semibold text-sm text-slate-900">
              {reviews}
            </div>
            <div className="font-inter text-xs text-slate-500">Reviews</div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/vendors/${id}`}
          className="block w-full mt-4 px-4 py-2 bg-rose-600 text-white font-inter font-medium text-sm text-center rounded-lg hover:bg-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          View Store
        </Link>
      </div>
    </motion.div>
  );
};

export default VendorCard;