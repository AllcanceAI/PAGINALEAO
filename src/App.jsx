import React from 'react';
import Hero from './components/Hero';
import Markets from './components/Markets';
import SocialProof from './components/SocialProof';
import Banner from './components/Banner';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="App">
      <Hero />
      <Markets />
      <SocialProof />
      <Banner />
      <Pricing />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
