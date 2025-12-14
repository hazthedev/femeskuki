import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
          Tentang Femes Kuki
        </h2>
        <p className="text-center text-neutral-gray max-w-3xl mx-auto">
          Akan datang: Cerita kami tentang passion, kreativiti, dan biskut yang lazat!
        </p>
      </div>
    </section>
  );
};

export default About;