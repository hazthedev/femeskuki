import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Image, Button } from '@/components/ui';
import { products, productCategories } from '@/data/products';
import { fadeInUp, staggerContainer, cardHover } from '@/utils/animations';

const ProductShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="section-padding bg-pastel-cream">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Our Delicious Cookies
          </h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Handcrafted with love, each cookie is a masterpiece of flavor and creativity
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {productCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent-pink text-white shadow-medium'
                  : 'bg-white text-neutral-gray hover:bg-accent-pink/10'
              }`}
              variants={fadeInUp}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={fadeInUp}>
              <Card hover className="h-full flex flex-col">
                <div className="aspect-square mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-charcoal">
                    {product.name}
                  </h3>
                  <p className="text-neutral-gray mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent-pink">
                      RM{product.price}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => window.location.href = '#contact'}
                    >
                      Order
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Products Note */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <p className="text-accent-orange font-medium">
            ✨ All cookies are made fresh to order with premium ingredients
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;