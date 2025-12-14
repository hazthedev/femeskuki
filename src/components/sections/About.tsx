import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
          About Femes Kuki
        </h2>
        <p className="text-center text-neutral-gray max-w-3xl mx-auto">
          Coming soon: Our story of passion, creativity, and delicious cookies!
        </p>
      </div>
    </section>
  );
};

export default About;