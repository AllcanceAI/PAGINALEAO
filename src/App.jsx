import React from 'react';
import Hero from './components/Hero';
import Markets from './components/Markets';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import WhatsAppPopup from './components/WhatsAppPopup';

function App() {
  return (
    <div className="App">
      <Hero />
      <Markets />
      <SocialProof />
      <Pricing />
      <Footer />
      <FloatingWhatsApp />
      <WhatsAppPopup />
    </div>
  );
}

export default App;
