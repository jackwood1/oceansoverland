import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Plus, 
  Minus, 
  Trash2,
  Leaf,
  Package,
  Truck,
  CreditCard,
  Shield,
  Users
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  conservationImpact: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
}

interface CartItem extends Product {
  quantity: number;
}

const Shop: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [sortBy, setSortBy] = useState<string>('featured');

  const products: Product[] = [
    {
      id: 1,
      name: "Wildlife Conservation T-Shirt",
      description: "100% organic cotton t-shirt featuring endangered animal designs. Each purchase helps protect wildlife habitats.",
      price: 29.99,
      originalPrice: 39.99,
      image: "👕",
      category: "Clothing",
      conservationImpact: "Protects 100 sq ft of wildlife habitat",
      rating: 4.8,
      reviews: 127,
      inStock: true,
      tags: ["Organic", "Eco-friendly", "Conservation"]
    },
    {
      id: 2,
      name: "Reusable Water Bottle",
      description: "Stainless steel water bottle with endangered animal engravings. Reduces plastic waste and supports conservation.",
      price: 24.99,
      image: "💧",
      category: "Accessories",
      conservationImpact: "Prevents 167 plastic bottles from entering oceans",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      tags: ["Reusable", "Ocean-friendly", "Durable"]
    },
    {
      id: 3,
      name: "Conservation Journal",
      description: "Beautiful leather-bound journal with wildlife photography. Perfect for documenting your conservation journey.",
      price: 19.99,
      image: "📔",
      category: "Books",
      conservationImpact: "Funds 1 day of anti-poaching patrol",
      rating: 4.7,
      reviews: 56,
      inStock: true,
      tags: ["Handcrafted", "Educational", "Inspirational"]
    },
    {
      id: 4,
      name: "Eco-Friendly Tote Bag",
      description: "Canvas tote bag with endangered species artwork. Made from recycled materials and supports habitat restoration.",
      price: 15.99,
      image: "👜",
      category: "Accessories",
      conservationImpact: "Restores 50 sq ft of forest habitat",
      rating: 4.6,
      reviews: 203,
      inStock: true,
      tags: ["Recycled", "Forest-friendly", "Versatile"]
    },
    {
      id: 5,
      name: "Wildlife Photography Book",
      description: "Stunning collection of endangered animal photographs with conservation stories. Hardcover with premium quality.",
      price: 34.99,
      image: "📸",
      category: "Books",
      conservationImpact: "Supports 1 week of research funding",
      rating: 4.9,
      reviews: 78,
      inStock: true,
      tags: ["Photography", "Educational", "Collector"]
    },
    {
      id: 6,
      name: "Conservation Bracelet",
      description: "Handmade bracelet with natural stones and endangered animal charms. Each piece supports specific species.",
      price: 12.99,
      image: "💍",
      category: "Jewelry",
      conservationImpact: "Protects 1 endangered animal for 1 month",
      rating: 4.5,
      reviews: 142,
      inStock: true,
      tags: ["Handmade", "Natural", "Charitable"]
    },
    {
      id: 7,
      name: "Eco-Friendly Notebook Set",
      description: "Set of 3 notebooks made from recycled paper with endangered animal covers. Perfect for students and professionals.",
      price: 18.99,
      image: "📚",
      category: "Stationery",
      conservationImpact: "Saves 3 trees from being cut down",
      rating: 4.7,
      reviews: 95,
      inStock: true,
      tags: ["Recycled", "Educational", "Professional"]
    },
    {
      id: 8,
      name: "Wildlife Conservation Hoodie",
      description: "Warm, comfortable hoodie with embroidered endangered animal designs. Made from sustainable materials.",
      price: 49.99,
      image: "🧥",
      category: "Clothing",
      conservationImpact: "Funds 1 week of habitat monitoring",
      rating: 4.8,
      reviews: 67,
      inStock: true,
      tags: ["Sustainable", "Warm", "Comfortable"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const categories = ['All', 'Clothing', 'Accessories', 'Books', 'Jewelry', 'Stationery'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-forest-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Conservation Shop
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every purchase supports wildlife conservation efforts. Shop our eco-friendly products 
            and make a positive impact on endangered species.
          </p>
        </motion.div>

        {/* Conservation Impact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-forest-500 to-ocean-500 text-white rounded-xl p-6 mb-8"
        >
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Heart className="w-6 h-6" />
            <h3 className="text-xl font-semibold">Your Impact</h3>
          </div>
          <p className="text-center text-forest-100">
            <strong>95% of proceeds</strong> go directly to wildlife conservation programs, 
            habitat restoration, and anti-poaching efforts worldwide.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>

            {/* Cart Button */}
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative btn-primary flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart ({cartItemCount})</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-coral-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </motion.div>

        {/* Cart Sidebar */}
        {showCart && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Shopping Cart</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl">{item.image}</div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-gray-600 text-sm">${item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="text-xl font-bold text-ocean-600">${cartTotal.toFixed(2)}</span>
                    </div>
                    <button className="w-full btn-primary py-3">
                      Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="animal-card group"
            >
              {/* Product Image */}
              <div className="text-center mb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                {product.originalPrice && (
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full mb-2">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-ocean-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-ocean-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Conservation Impact */}
                <div className="bg-forest-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 text-forest-700">
                    <Leaf className="w-4 h-4" />
                    <span className="text-sm font-medium">{product.conservationImpact}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-ocean-100 text-ocean-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    product.inStock
                      ? 'bg-ocean-600 hover:bg-ocean-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {sortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters.</p>
          </motion.div>
        )}

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-ocean-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Eco-Friendly</h4>
            <p className="text-sm text-gray-600">Sustainable materials and practices</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-forest-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Conservation Impact</h4>
            <p className="text-sm text-gray-600">95% of proceeds support wildlife</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-coral-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Quality Guaranteed</h4>
            <p className="text-sm text-gray-600">Premium products with satisfaction guarantee</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Community</h4>
            <p className="text-sm text-gray-600">Join thousands of conservation supporters</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
