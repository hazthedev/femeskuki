import React from 'react';

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="section-padding bg-pastel-cream">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
          Our Cookies
        </h2>
        <p className="text-center text-neutral-gray max-w-3xl mx-auto">
          Coming soon: Showcase of our delicious cookie varieties!
        </p>
      </div>
    </section>
  );
};

export default ProductShowcase;