import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import ProductShowcase from './components/sections/ProductShowcase';
import SocialProof from './components/sections/SocialProof';
import CallToAction from './components/sections/CallToAction';
import ScrollProgress from './components/features/ScrollProgress';
import CookieClickerEasterEgg from './components/features/CookieClickerEasterEgg';
import SEOHead from './components/features/SEOHead';

function App() {
  return (
    <>
      <SEOHead />
      <ScrollProgress />
      <CookieClickerEasterEgg />

      <div className="min-h-screen bg-pastel-pink">
        <Header />

        <main>
          <Hero />
          <About />
          <ProductShowcase />
          <SocialProof />
          <CallToAction />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;