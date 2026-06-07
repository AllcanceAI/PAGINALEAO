import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section style={{ width: '100%', backgroundColor: '#000', padding: '2rem 1rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '800px', width: '100%', position: 'relative' }}>
            <img 
              src="/trader-car.jpg" 
              alt="Molina Trader - Disciplina" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '16px', 
                border: '1px solid var(--color-border)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }} 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.style.display = 'none';
                document.getElementById('banner-placeholder').style.display = 'flex';
              }}
            />
            
            {/* Placeholder if image is missing */}
            <div id="banner-placeholder" style={{ 
              display: 'none',
              width: '100%',
              padding: '4rem 2rem',
              background: 'linear-gradient(45deg, #111, #222)', 
              borderRadius: '16px',
              border: '1px solid var(--color-gold-dark)',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
              <h2 style={{ fontSize: '2rem', textAlign: 'center', color: '#fff' }}>DISCIPLINA HOJE, LIBERDADE AMANHÃ.</h2>
              <p style={{ marginTop: '1rem', textAlign: 'center', color: '#888' }}>
                 "Salve a imagem do carro como trader-car.jpg na pasta public"
              </p>
            </div>
        </div>
    </section>
  );
};

export default Banner;
